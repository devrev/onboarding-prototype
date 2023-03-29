import React from "react";
import {
  BiUserVoice,
  BiClipboard,
  BiConversation,
  BiEditAlt,
} from "react-icons/bi";
import clsx from "clsx";

export const IconMap = {
  issue: BiClipboard,
  ticket: BiUserVoice,
  conv: BiConversation,
};

const classMap = {
  issue: "bg-issue text-color-issue",
  ticket: "bg-ticket text-color-ticket",
  conv: "bg-conversation text-color-conversation",
  enh: "bg-pill text-gray-700",
};

const WorkPill = ({ display, type = "issue", isCreate = false, ...props }) => {
  const Icon = isCreate ? BiEditAlt : IconMap[type];
  const colorClasses = classMap[type];
  return (
    <div
      className={clsx(
        colorClasses,
        "flex items-center text-small font-medium rounded-md py-1 px-2 w-fit h-fit max-w-[8rem] cursor-pointer"
      )}
      {...props}
    >
      {type != "enh" && <Icon className="text-h2" />}
      <div className="ml-1">{display}</div>
    </div>
  );
};

export default WorkPill;
