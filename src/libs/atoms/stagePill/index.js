import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const iconMap = {
  review: BsArrowRightCircle,
};

const textMap = {
  review: "In Review",
};

const StagePill = ({ stage }) => {
  const Icon = iconMap[stage];

  return (
    <div className="flex items-center">
      <Icon />
      <p className="ml-1 font-medium text-gray-600">{textMap[stage]}</p>
    </div>
  );
};

export default StagePill;
