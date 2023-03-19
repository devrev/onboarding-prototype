import React from "react";
import clsx from "clsx";

const buttonStyleMap = {
  secondary: "p-2 border-solid border bg-white border-gray-200 text-gray-700",
  filter:
    "p-1 border-solid border bg-white border-gray-200 text-gray-700 hover:border-gray-400",
  action:
    "px-2 py-1 shadow-tiny border-solid font-medium text-default border bg-white rounded-md hover:bg-menu-hovered",
  primary: "p-1 bg-accent text-gray-200",
  lifted:
    "bg-lifted-area border-default shadow-tiny text-color-highlight p-4 text-left rounded-xl",
  lifted_disabled:
    "bg-pill border-default text-gray-600 p-4 text-left rounded-xl",
};

const Button = ({
  size,
  disabled,
  children,
  type = "secondary",
  onClick,
  className,
  ...props
}) => {
  const buttonClass = buttonStyleMap[type];
  return (
    <button
      className={clsx("rounded-lg cursor-pointer", buttonClass, className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
