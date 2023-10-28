import React from "react";
import PropTypes from "prop-types";

const variants = {
  fill: "rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 w-fit",
  outline:
    "border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600",
  grayBTN: "flex flex-row items-center rounded-lg px-4 py-2 border-gray-100 border text-gray-700",
};
const sizes = {
  sm: "flex py-2 text-sm px-4 h-sm text-center",
  md: "flex py-2 text-md px-4 h-md text-center",
  lg: "flex py-2 text-lg px-4 h-lg text-center",
  xl: "flex py-2 text-xl px-4 h-xl text-center",
};

function Button({ children, variant = "outline", size = "lg", type = "button", className, onClick,...props }) {
  return (
    <button
      className={`p-4 rounded flex items-center gap-4  ${variants[variant]} ${sizes[size]}`}
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
