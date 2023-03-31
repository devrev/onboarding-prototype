import React from "react";
import {
  BiUserVoice,
  BiClipboard,
  BiConversation,
  BiEditAlt,
} from "react-icons/bi";
import clsx from "clsx";
import { EnhancementIcon } from "@/libs/icons";

export const IconMap = {
  issue: BiClipboard,
  ticket: BiUserVoice,
  conv: BiConversation,
  enh: EnhancementIcon,
};

const classMapBg = {
  issue: "bg-issue",
  ticket: "bg-ticket",
  conv: "bg-conversation",
  enh: "bg-trails-enhancement",
};

const classMap = {
  issue: "text-color-issue",
  ticket: "text-color-ticket",
  conv: "text-color-conversation",
  enh: "text-trails-enhancement",
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
