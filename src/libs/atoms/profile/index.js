import React from "react";
import clsx from "clsx";

const sizeMap = {
  xs: "w-6 h-6 text-small",
  sm: "w-7 h-7 text-default",
  md: "w-12 h-12 text-lg",
};

const ProfilePicture = ({ name, size = "xs", color }) => {
  const sizeClass = sizeMap[size];
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
