import React from "react";
import {
  BiUserVoice,
  BiConversation,
  BiEditAlt,
  BiCube
} from "react-icons/bi";
import { IssueIcon } from "@/libs/icons";
import clsx from "clsx";
import { EnhancementIcon } from "@/libs/icons";

export const IconMap = {
  issue: IssueIcon,
  ticket: BiUserVoice,
  conv: BiConversation,
  enhancement: EnhancementIcon,
  capability: BiCube
};

const classMapBg = {
  issue: "bg-issue",
  ticket: "bg-ticket",
  conv: "bg-conversation",
  enhancement: "bg-trails-enhancement",
  capability: "bg-trails-capability bg-opacity-10",
};

const classMap = {
  issue: "text-color-issue",
  ticket: "text-color-ticket",
  conv: "text-color-conversation",
  enhancement: "text-trails-enhancement",
  capability: "text-trails-capability"
};

const WorkPill = ({
  display,
  type = "issue",
  isCreate = false,
  useBg = true,
  ...props
}) => {
  const Icon = isCreate ? BiEditAlt : IconMap[type];
  const colorClasses = clsx(classMap[type], useBg && classMapBg[type]);
  return (
    <div
      className={clsx(
        colorClasses,
        "flex items-center text-small font-medium rounded-md py-1 px-2 min-w-fit max-w-[30rem] cursor-pointer capitalize"
      )}
      {...props}
    >
      <Icon className="text-h2 w-4 h-4" />
      <div className="ml-1">{display}</div>
    </div>
  );
};

export default WorkPill;
