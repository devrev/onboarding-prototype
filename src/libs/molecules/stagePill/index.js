import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiTimeFive, BiWrench, BiRightArrowCircle } from "react-icons/bi";


const iconMap = {
  review: BsArrowRightCircle,
  new: BiTimeFive,
};

const textMap = {
  review: "In Review",
  default: "Working",
  new: "New"
};

const StagePill = ({ stage }) => {
  const Icon = iconMap[stage] || iconMap["review"];

  return (
    <div className="flex items-center">
      <Icon />
      <p className="ml-1 font-medium text-gray-600">{textMap[stage] || textMap["default"]}</p>
    </div>
  );
};

export default StagePill;
