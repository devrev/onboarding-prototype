import clsx from "clsx";
import React from "react";
import Pill from "@/libs/atoms/pill";

const colors = [
  "bg-gray-500",
  "bg-yellow-light",
  "bg-red-light",
  "bg-orange-light",
  "bg-purple-light",
  "bg-red-light",
];

const RevOrgPill = ({ name, color }) => {
  if (!color) {
    const colorIdx = Math.floor(Math.random() * colors.length);
    color = colors[colorIdx];
  }

  return (
    <Pill>
      <div
        className={clsx(
          "w-4 h-4 rounded-4xl text-tiny flex items-center justify-center text-white font-semibold",
          color
        )}
      >
        {name[0]}
      </div>
      <div className="ml-1 text-small">{name}</div>
    </Pill>
  );
};

export default RevOrgPill;
