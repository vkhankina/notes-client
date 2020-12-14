import PropTypes from "prop-types";
import BasicInput from "../form/BasicInput";

function NotesForm({ errors, onSubmit, onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    let data = {};
    for (let i = 0; i < elements.length; i++) {
      const item = elements.item(i);
      if (item.name !== "") {
        data[item.name] = item.value;
      }
    }
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <BasicInput
        name="name"
        label="Name"
        error={errors.name}
        required
        placeholder="Name"
      />
      <BasicInput
        name="description"
        label="Description"
        error={errors.description}
        required
        placeholder="Some text..."
        render={(props) => <textarea {...props} />}
      />
      <input type="submit" />
      <input type="reset" />
      <button onClick={onClose}>Close</button>
    </form>
  );
}

NotesForm.propTypes = {
  errors: PropTypes.shape({
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

NotesForm.defaultProps = {
  errors: {},
  onClose: () => {},
};

export default NotesForm;
