import { useState, useEffect, useContext } from "react";
import notesService from "../../services/notes";
import NotesList from "./List";
import NotificationsContext from "../../contexts/notifications";

function Notes() {
  const [notes, setNotes] = useState([]);
  const notify = useContext(NotificationsContext);

  const fetchNotes = () => {
    notesService("notes")
      .then((response) => setNotes(response.data))
      .catch(() => notify.error("Failed to fetch notes from server!"));
  };
  const onDelete = (id) => {
    notesService(`notes/${id}`, "delete").then(fetchNotes);
  };
  const onAdd = (note) => {
    notesService("notes", "post", { data: note }).then(fetchNotes);
  };

  useEffect(fetchNotes, []);

  return (
    <>
      <h1>Notes</h1>
      <NotesList notes={notes} onDelete={onDelete} />
    </>
  );
}

export default Notes;
