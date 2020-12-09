import PropTypes from "prop-types";

function NotesList({ notes, onDelete }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <h2>{note.name}</h2>
          <span>{note.insertedAt}</span>
          <span>{note.description}</span>
          <button onClick={() => onDelete(notes.id)}>Delete</button>
        </li>
      ))}
    </ul>
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
