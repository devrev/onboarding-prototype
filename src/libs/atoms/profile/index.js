import React from "react";
import clsx from "clsx";
import { bgColors } from "@/constants";

const sizeMap = {
  xs: "w-6 h-6 text-small",
  sm: "w-7 h-7 text-default",
  md: "w-12 h-12 text-lg",
};

const ProfilePicture = ({ name, size = "xs", color }) => {
  if (name.length > 2) {
    const splitName = name.split(" ");
    if (splitName.length >= 2) {
      name = splitName[0][0] + splitName[1][0];
    } else {
      name = name[0] + name[1];
    }
  }

  const sizeClass = sizeMap[size];
  if (!color) {
    const colorIdx = Math.floor(Math.random() * bgColors.length);
    color = bgColors[colorIdx];
  }

  return (
    <div
      className={clsx(
        sizeClass,
        color,
        "flex flex-shrink-0 justify-center items-center rounded-md text-white"
      )}
    >
      {name}
    </div>
  );
};

export default ProfilePicture;
