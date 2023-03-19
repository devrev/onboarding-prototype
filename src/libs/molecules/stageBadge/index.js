import React from "react";
import { STAGES } from "@/constants";
import { BiTimeFive, BiWrench, BiRightArrowCircle } from "react-icons/bi";
import clsx from "clsx";

export const stageIconMap = {
  [STAGES.DEVELOPMENT]: BiWrench,
  [STAGES.NOW]: BiTimeFive,
  [STAGES.REVIEW]: BiRightArrowCircle,
};

const StageBadge = ({ stage, className }) => {
  const Icon = stageIconMap[stage] || stageIconMap[STAGES.REVIEW];
  return (
    <div
      className={clsx(
        "flex items-center text-gray-700 bg-pill w-fit px-3 py-2 rounded-full",
        className
      )}
    >
      <Icon className="text-h2" />
      <p className="capitalize ml-1 text-small">{stage}</p>
    </div>
  );
};

export default StageBadge;
