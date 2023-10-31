import React from "react";
import PropTypes from "prop-types";
import tickSquareButton from "/src/assets/tick-square-light-button.svg"
import arrowDownButton from "/src/assets/arrow-down-button.svg"

const variants = {
  fill: "px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 w-fit",
  outline:
    "border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600",
  grayBTN: "border-gray-100 border text-gray-700 text-sm py-2",
};
const sizes = {
  sm: "flex py-2 text-sm px-2 text-center",
  md: "flex py-2 text-md px-4 text-center",
  lg: "flex py-2 text-lg px-5 text-center",
  xl: "flex py-3 text-xl px-6 text-center",
  xxl: "flex py-4 text-xl px-7 text-center"
};

function Button({ children, variant = "outline", size = "lg", type = "button", className, onClick,...props }) {
  return (
    <button
      className={`rounded-lg flex items-center gap-4  ${variants[variant]} ${sizes[size]} ${className}`}
      {...props} type={type} onClick={onClick}
    >
      {children}
  </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variants: PropTypes.oneOf(Object.keys(variants)),
  sizes: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  type: PropTypes.string

};

export default Button;
