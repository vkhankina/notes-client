import { useState, useEffect, useContext } from "react";
import _ from "lodash";
import notesService from "../../services/notes";
import NotesList from "./List";
import NotificationsContext from "../../contexts/notifications";
import AddButton from "../buttons/AddButton";
import NotesForm from "./Form";

const noOp = () => {};

function Notes() {
  const [notes, setNotes] = useState([]);
  const [validation, setValidation] = useState({});
  const notify = useContext(NotificationsContext);

  const fetchNotes = () => {
    notesService("notes/")
      .then((response) => setNotes(response.data.data))
      .catch(() => notify.error("Failed to fetch notes from server!"));
  };
  const onDelete = (id) => {
    notesService(`notes/${id}/`, "delete")
      .then(() => notify.success("Note was deleted!"))
      .then(fetchNotes)
      .catch(() => notify.error("Failed to delete note!"));
  };
  const onAdd = (note, onSuccess = noOp, onError = noOp) => {
    notesService("notes/", "post", { data: note })
      .then(fetchNotes)
      .then(() => notify.success("Note was added!"))
      .then(onSuccess)
      .catch(({ response }) => {
        notify.error("Failed to add note!");
        if (response.status === 422) {
          setValidation(_.get(response, "data.error", {}));
        }
        onError();
      });
  };

  const renderForm = ({ onClose }) => (
    <NotesForm
      onSubmit={(note) => onAdd(note, onClose)}
      onClose={onClose}
      errors={validation}
    />
  );

  useEffect(fetchNotes, [notify]);

  return (
    <>
      <AddButton renderForm={renderForm} />
      <NotesList notes={notes} onDelete={onDelete} />
    </>
  );
}

export default Notes;
