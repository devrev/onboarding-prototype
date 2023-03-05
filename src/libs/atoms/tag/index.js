import clsx from "clsx";
import React from "react";
import Pill from "../pill";
import { bgColors } from "@/constants";

const Tag = ({ name, color }) => {
  if (!color) {
    const colorIdx = Math.floor(Math.random() * bgColors.length);
    color = bgColors[colorIdx];
  }

  return (
    <Pill>
      <div className={clsx("w-2 h-2 rounded", color)}></div>
      <div className="ml-1 text-small">{name}</div>
    </Pill>
  );
};

export default Tag;
