import React from "react";
import clsx from "clsx";
import { bgColors } from "@/constants";

const sizeMap = {
  xs: "w-6 h-6 text-small rounded-lg",
  sm: "w-7 h-7 text-default rounded-lg",
  md: "w-9 h-9 text-lg rounded-lg",
};

const smallSizeMap = {
  xs: "w-3 h-3 text-tiny",
  sm: "w-4 h-4 text-tiny",
  md: "w-5 h-5 text-tiny",
};

const RevUserProfile = ({ name, size = "xs", color, revOrg }) => {
  if (name.length > 2) {
    const splitName = name.split(" ");
    if (splitName.length >= 2) {
      name = splitName[0][0] + splitName[1][0];
    } else {
      name = name[0] + name[1];
    }
  }

  const sizeClass = sizeMap[size];
  let colorRevorg;

  if (!color) {
    const colorIdx = Math.floor(Math.random() * bgColors.length);
    const revOrgColorIdx = Math.floor(Math.random() * bgColors.length);

    color = bgColors[colorIdx];
    colorRevorg = bgColors[revOrgColorIdx];
  }
  const smallClass = smallSizeMap[size];
  color = bgColors[4];
  colorRevorg = bgColors[1];

  return (
    <div
      className={clsx(
        sizeClass,
        color,
        "flex flex-shrink-0 justify-center items-center text-white relative"
      )}
    >
      {name}
      <div
        className={clsx(
          smallClass,
          colorRevorg,
          "p-1.5 border-2 border-white absolute right-0 bottom-0 rounded-full translate-x-1 translate-y-1 flex items-center justify-center font-semibold"
        )}
      >
        {revOrg[0]}
      </div>
    </div>
  );
};

export default RevUserProfile;
