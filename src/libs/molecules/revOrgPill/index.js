import clsx from "clsx";
import React from "react";
import Pill from "@/libs/atoms/pill";
import { bgColors } from "@/constants";

const RevOrgPill = ({ name, color }) => {
  if (!color) {
    const colorIdx = Math.floor(Math.random() * bgColors.length);
    color = bgColors[colorIdx];
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
