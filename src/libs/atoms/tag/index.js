import clsx from "clsx";
import React from "react";
import Pill from "../pill";

const colors = [
  "bg-gray-500",
  "bg-yellow-light",
  "bg-red-light",
  "bg-orange-light",
  "bg-purple-light",
  "bg-red-light",
];

const Tag = ({ name, color }) => {
  if (!color) {
    const colorIdx = Math.floor(Math.random() * colors.length);
    color = colors[colorIdx];
  }

  return (
    <Pill>
      <div className={clsx("w-2 h-2 rounded", color)}></div>
      <div className="ml-1 text-small">{name}</div>
    </Pill>
  );
};

export default Tag;