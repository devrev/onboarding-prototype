import clsx from "clsx";
import React from "react";

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
    <div className="flex bg-pill w-fit items-center py-1 px-2 rounded-xl ml-1">
      <div className={clsx("w-2 h-2 rounded", color)}></div>
      <div className="ml-1 text-small">{name}</div>
    </div>
  );
};

export default Tag;
