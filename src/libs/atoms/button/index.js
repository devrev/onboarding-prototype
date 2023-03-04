import React from "react";
import clsx from "clsx";

const buttonStyleMap = {
  secondary:
    "border-solid border bg-white border-gray-200 rounded-lg text-gray-700",
};

const Button = ({ size, disabled, children, type }) => {
  const buttonClass = buttonStyleMap[type] || buttonStyleMap["secondary"];
  return (
    <button
      className={clsx(buttonClass, "p-2 rounded-lg cursor-pointer")}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
