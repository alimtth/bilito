import React from "react";
import tickSquareButton from "/src/assets/tick-square-dark-button.svg";

function Input({ size = "lg", placeholder }) {
  const sizes = {
    sm: "flex py-2 text-sm px-4 h-sm text-center w-auto",
    md: "flex py-2 text-sm px-4 h-md text-center w-auto",
    lg: "flex py-2 text-sm px-4 h-lg text-center w-auto",
    xl: "flex py-2 text-lg px-4 h-xl text-center w-auto",
  };
  return (
    <div className="rounded border border-gray-100 shrink hover:shadow-xl hover:transition-shadow focus:border-blue-400">
      {/* <img src={tickSquareButton} /> */}
      <input
        type="text"
        placeholder={`${placeholder}`}
        className={`py-4 focus:outline-none text-right h-full flex-grow placeholder-gray-450 ${sizes[size]}`}
      />
      {/* <img src={tickSquareButton} /> */}
    </div>
  );
}

export default Input;
