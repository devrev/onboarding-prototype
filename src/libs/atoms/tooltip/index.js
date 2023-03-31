import React from "react";
import Button from "../button";

const Tooltip = ({
  continuous,
  index,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
  showNext,
}) => {
  return (
    <div
      className="w-fit-content max-w-[30rem] bg-white py-4 px-2.5 rounded-lg shadow-popover"
      {...tooltipProps}
    >
      {step.title && <div>{step.title}</div>}
      <div className="text-default">{step.content}</div>
      <div>
        {continuous && showNext && <Button {...primaryProps}>Next</Button>}
      </div>
    </div>
  );
};

export default Tooltip;
