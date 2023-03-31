import React from "react";
import clsx from "clsx";
import { bgColors } from "@/constants";

const sizeMap = {
  xxs: "w-5 h-5 text-tiny rounded-md",
  xs: "w-6 h-6 text-small",
  sm: "w-7 h-7 text-default",
  md: "w-9 h-9 text-lg",
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

  color = bgColors[6];

  return (
    <div
      className={clsx(
        color,
        "flex flex-shrink-0 justify-center items-center rounded-lg text-white",
        sizeClass
      )}
    >
      {name}
    </div>
  );
};

export default ProfilePicture;
