import React from "react";
import PropTypes from "prop-types";
import tickSquareButton from "/src/assets/tick-square-light-button.svg"
import arrowDownButton from "/src/assets/arrow-down-button.svg"

function Button({ children, variant = "outline", size = "lg", ...props }) {
  const variants = {
    fill: "rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 ",
    outline:
      "border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600",
  };
  const sizes = {
    sm: "py-2 text-sm px-4 h-sm",
    md: "py-2 text-sm px-4 h-md",
    lg: "py-2 text-sm px-4 h-lg",
    xl: "py-2 text-lg px-4 h-xl",
  };

  return (
    <button
      className={`p-4 rounded flex justify-between items-center gap-4  ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      <img src={arrowDownButton} />
      {children}
      <img src={tickSquareButton} />
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["fill", "outline"]),
  sizes: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
