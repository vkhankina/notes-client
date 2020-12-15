import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

function BasicInput({ label, name, error, required, ...rest }) {
  return (
    <Form.Group controlId={name}>
      <Form.Label className={required ? "required" : ""}>{label}</Form.Label>
      <Form.Control
        isInvalid={!!error}
        name={name}
        required={required}
        {...rest}
      />
      <Form.Control.Feedback type={error ? "invalid" : "valid"}>
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

BasicInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  required: PropTypes.bool,
};

BasicInput.defaultProps = {
  error: null,
  required: false,
};

export default BasicInput;
