import React from "react";
import { AiOutlineSlack } from "react-icons/ai";
import { MdOutlineMailOutline, MdChatBubbleOutline } from "react-icons/md";
import clsx from "clsx";

const IconMap = {
  slack: AiOutlineSlack,
  email: MdOutlineMailOutline,
  plug: MdChatBubbleOutline,
};

const SourcePill = ({ name, ...props }) => {
  const Icon = IconMap[name];
  return (
    <div
      className={clsx(
        "flex items-center text-small bg-gray-200 text-gray-800 rounded-md py-1 px-2 w-fit h-fit max-w-[7rem] capitalize"
      )}
      {...props}
    >
      <Icon className="text-h2" />
      <div className="ml-1">{name}</div>
    </div>
  );
};

export default SourcePill;
