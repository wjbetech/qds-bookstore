import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export const Button = ({ primary, background, size, label, ...props }) => {
  const mode = "primary" ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${mode}`, `storybook-button--${size}`, mode].join(" ")}
    >{label}</button>
  );
};

// BUTTON DOCUMENTATION
Button.propTypes = {
  // principal call to action?
  primary: PropTypes.bool,
  // background color STRING type
  backgroundColor: PropTypes.string,
  // button size from array of button sizes
  size: PropTypes.oneOf(["small", "medium", "large"]),
  // button label STRING type && REQUIRED
  label: PropTypes.string.isRequired,
  // click handler
  onClick: PropTypes.func,
}

// standardised aesthetic default props for Button
Button.defaultProps = {
  backgroundColor: "white",
  primary: "3468C0",
  secondary: "43766C",
  size: "medium",
  color: "#f2f2f2",
}