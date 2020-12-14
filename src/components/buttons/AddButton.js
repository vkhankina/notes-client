import { useState } from "react";
import PropTypes from "prop-types";

function AddButton({ renderForm, btnText }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  if (!open) {
    return <button onClick={toggle}>{btnText}</button>;
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
