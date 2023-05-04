import React from "react";
import WorkPill from "@/libs/molecules/workPill";
import ProfilePicture from "@/libs/atoms/profile";
import SourcePill from "@/libs/molecules/sourcePill";
import RevUserProfile from "@/libs/molecules/revUserProfile";
import StageBadge from "@/libs/molecules/stageBadge";
import StagePill from "@/libs/molecules/stagePill";

const convertToConversationTableRow = (conv) => {
  return [
    <div
      key={`profile-${conv.displayId}`}
      className="flex items-center"
      id={conv.id}
    >
      <RevUserProfile
        size="sm"
        name={conv.member.name}
        revOrg={conv.member.revOrg}
      />
      <div className="ml-2">
        <p>{conv.member.name}</p>
        <p className="text-small text-gray-500">{conv.member.revOrg}</p>
      </div>
    </div>,
    <SourcePill
      key={`source-${conv.displayId}`}
      name={conv.source}
      id={conv?.id && `${conv.id}__conv-source`}
    />,
    <div key={`last_msg-${conv.displayId}`} className="flex items-center">
      {conv.msg?.revOrg ? (
        <RevUserProfile
          size="xs"
          name={conv.msg.name}
          color={conv.msg?.color}
          revOrg={conv.msg.revOrg}
        />
      ) : (
        <ProfilePicture
          size="xs"
          name={conv.msg.name}
          color={conv.msg?.color}
        />
      )}
      <p className="ml-1 ellipsis-break">{conv.msg.text}</p>
    </div>,
    <div key={`sla-${conv.displayId}`}>-</div>,
    <StagePill stage={conv.stage} key={`stage-${conv.displayId}`} />,
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
