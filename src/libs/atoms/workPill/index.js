import React from "react";
import { BiUserVoice, BiClipboard } from "react-icons/bi";
import clsx from "clsx";

const IconMap = {
  issue: BiClipboard,
  ticket: BiUserVoice,
};

const classMap = {
  issue: "bg-issue text-color-issue",
  ticket: "bg-ticket text-color-ticket",
};

const WorkPill = ({ display, type = "issue" }) => {
  const Icon = IconMap[type];
  const colorClasses = classMap[type];
  return (
    <div
      className={clsx(
        colorClasses,
        "flex items-center text-small font-medium rounded-md py-1 px-2 w-fit h-fit max-w-[7rem] cursor-pointer"
      )}
    >
      <Icon className="text-h2" />
      <div className="ml-1">{display}</div>
    </div>
  );
};

export default WorkPill;
