import React from "react";
import clsx from "clsx";

const sizeMap = {
  sm: "w-7 h-7 text-default",
  md: "w-12 h-12 text-lg",
};

const ProfilePicture = ({ name, size, color }) => {
  const sizeClass = sizeMap[size] || sizeMap["sm"];
  return (
    <div
      className={clsx(
        sizeClass,
        "flex justify-center items-center rounded-md text-white"
      )}
      style={{ backgroundColor: color }}
    >
      {name}
    </div>
  );
};

export default ProfilePicture;
