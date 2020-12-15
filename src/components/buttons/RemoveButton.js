import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function RemoveButton({ message, onOk, onCancel, onClick, children, ...rest }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const handleCancel = () => {
    toggle();
    onCancel();
  };

  const handleOk = () => {
    toggle();
    onOk();
  };

  return (
    <>
      <Button onClick={toggle} {...rest}>
        {children}
      </Button>
      <Modal show={open}>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleOk}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

RemoveButton.propTypes = {
  message: PropTypes.string,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  children: PropTypes.node,
};

RemoveButton.defaultProps = {
  message: "Are you sure to delete item?",
  onCancel: () => {},
  children: "Delete",
};

export default RemoveButton;
