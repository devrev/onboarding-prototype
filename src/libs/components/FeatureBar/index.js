import Toggle from "@/libs/atoms/toggle";
import clsx from "clsx";
import React, { useState } from "react";

const FeatureBar = ({ text, className }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={clsx(
        "flex items-center py-1.5 px-3 rounded-lg justify-between w-full bg-purple-dark bg-opacity-5 text-default",
        className
      )}
    >
      <div className="text-color-purple">
        Beta Feature: Introducing Smart grouping. Now easily group work item
        based on their context.
      </div>
      <div className="pl-4 border-l flex items-center">
        <Toggle checked={checked} setChecked={setChecked} />
        <p className="ml-4 text-default text-gray-500 font-medium">
          Try it now
        </p>
      </div>
    </div>
  );
};

export default FeatureBar;
