import { useState } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function AddButton({ renderForm, btnText }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  if (!open) {
    return <Button onClick={toggle}>{btnText}</Button>;
  }

  return renderForm({ onClose: toggle });
}

AddButton.propTypes = {
  renderForm: PropTypes.func.isRequired,
  btnText: PropTypes.string,
};

AddButton.defaultProps = {
  btnText: "Add",
};

export default AddButton;
