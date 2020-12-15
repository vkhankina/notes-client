import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import RemoveButton from "../buttons/RemoveButton";

function NotesList({ notes, onDelete }) {
  return (
    <div>
      {notes.map((note) => {
        const date = new Date(note.insertedAt);

        return (
          <Card key={note.id}>
            <Card.Body>
              <Card.Title>{note.name}</Card.Title>
              <Card.Subtitle>{date.toLocaleString()}</Card.Subtitle>
              <Card.Text>{note.description}</Card.Text>
              <RemoveButton variant="danger" onOk={() => onDelete(note.id)} />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      insertedAt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NotesList;
