import React from "react";
import clsx from "clsx";

const buttonStyleMap = {
  secondary:
    "p-2 border-solid border bg-white border-gray-200 rounded-lg text-gray-700",
  filter:
    "p-1 border-solid border bg-white border-gray-200 rounded-md text-gray-700 hover:border-gray-400",
};

const Button = ({
  size,
  disabled,
  children,
  type = "secondary",
  className,
}) => {
  const buttonClass = buttonStyleMap[type];
  return (
    <button
      className={clsx(buttonClass, "rounded-lg cursor-pointer", className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
