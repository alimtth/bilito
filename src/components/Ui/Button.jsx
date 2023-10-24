import React from "react";
import PropTypes from "prop-types";
import tickSquareButton from "/src/assets/tick-square-light-button.svg"
import arrowDownButton from "/src/assets/arrow-down-button.svg"

function Button({ children, variant = "outline", size = "lg", ...props }) {
  const variants = {
    fill: "rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 ",
    outline:
      "border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600",
    grayBTN: "flex felx-row items-center justify-evenly rounded-lg px-4 py-2 border-gray-100 border text-gray-700 w-fit",
  };
  const sizes = {
    sm: "flex py-2 text-sm px-4 h-sm text-center",
    md: "flex py-2 text-sm px-4 h-md text-center",
    lg: "flex py-2 text-sm px-4 h-lg text-center",
    xl: "flex py-2 text-lg px-4 h-xl text-center",
  };

  return (
    <button
      className={`p-4 rounded flex justify-between aligh items-center gap-4  ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
  </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["fill", "outline"]),
  sizes: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
