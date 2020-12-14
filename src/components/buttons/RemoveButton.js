import PropTypes from "prop-types";

function RemoveButton({ message, onOk, onCancel, onClick, children, ...rest }) {
  const handleClick = () => {
    const flag = window.confirm(message);
    if (flag) {
      onOk();
    } else {
      onCancel();
    }
  };

  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
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
