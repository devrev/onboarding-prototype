import React from "react";
import WorkPill from "@/libs/molecules/workPill";
import ProfilePicture from "@/libs/atoms/profile";
import SourcePill from "@/libs/molecules/sourcePill";

const convertToConversationTableRow = (conv) => {
  return [
    <WorkPill key={conv.displayId} type="conv" display={conv.displayId} />,
    "CourseHero",
    <div key="members" className="flex items-center">
      <ProfilePicture
        size="xs"
        name={conv.member.name}
        color={conv.member?.color}
      />
      <p className="ml-1">{conv.member.name}</p>
      <p className="ml-2 text-tiny text-gray-400">+{conv.member.extra}</p>
    </div>,
    <SourcePill key="source" name={conv.source} />,
    <div key="last_msg" className="flex items-center">
      <ProfilePicture size="xs" name={conv.msg.name} color={conv.msg?.color} />
      <p className="ml-1 ellipsis-break">{conv.msg.text}</p>
    </div>,
    conv.ticket ? (
      <WorkPill key={conv.ticket} type="ticket" display={conv.ticket} />
    ) : (
      <p> - </p>
    ),
    <p className="text-small" key="update">
      {conv.updated}
    </p>,
  ];
};

export default convertToConversationTableRow;
