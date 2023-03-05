import React from "react";

const Input = ({ text, ...props }) => {
  return (
    <div className="text-default text-color-primary py-1 px-2" {...props}>
      {text}
    </div>
  );
};

export default Input;
