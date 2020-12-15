import { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BasicInput from "../form/BasicInput";

function NotesForm({ onSubmit, onClose }) {
  const [errors, setErrors] = useState({});
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
    onSubmit(data, setErrors);
  };

  return (
    <Form onSubmit={handleSubmit} onReset={() => setErrors({})}>
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
        as="textarea"
      />
      <Button onClick={onClose}>Close</Button>
      <Button type="reset">Reset</Button>
      <Button type="submit" variant="success">
        Submit
      </Button>
    </Form>
  );
}

NotesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

NotesForm.defaultProps = {
  onClose: () => {},
};

export default NotesForm;
