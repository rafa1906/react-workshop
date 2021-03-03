import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css";

const BUTTON_TYPES = [
  "brand-primary",
  "brand-secondary",
  "alt-primary",
  "alt-secondary"
];

const BUTTON_SIZES = ["small", "medium", "large"];

const Button = ({ children, type, size, inverted, disabled, onClick }) => {
  const classes = classNames("button-component", type, size, {
    disabled,
    inverted
  });

  const handleClick = (e) => {
    if (disabled) {
      e.stopPropagation();
      e.preventDefault();
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <button className={classes} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "brand-primary",
  size: "medium"
};

Button.propTypes = {
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(BUTTON_TYPES),
  size: PropTypes.oneOf(BUTTON_SIZES),
  onClick: PropTypes.func
};

export default Button;

//📙 Learn about React Components and Props: https://reactjs.org/docs/components-and-props.html
