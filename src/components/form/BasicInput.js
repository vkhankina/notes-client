import PropTypes from "prop-types";

function BasicInput({ label, name, error, render, required, ...rest }) {
  return (
    <span>
      <label htmlFor={name} className={`label ${required ? "required" : ""}`}>
        {label}
        {render ? (
          render({ name, required, ...rest })
        ) : (
          <input name={name} required={required} {...rest} />
        )}
      </label>
      <span className={`validation ${error ? "error" : ""}`}>{error}</span>
    </span>
  );
}

BasicInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  render: PropTypes.func,
  required: PropTypes.bool,
};

BasicInput.defaultProps = {
  error: null,
  render: null,
  required: false,
};

export default BasicInput;
