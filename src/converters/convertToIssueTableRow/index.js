import React from "react";
import WorkPill from "@/libs/molecules/workPill";
import ProfilePicture from "@/libs/atoms/profile";
import StagePill from "@/libs/molecules/stagePill";
import Tag from "@/libs/atoms/tag";

const convertToIssueTableRow = (item) => {
  return [
    <WorkPill key={item.displayId} type={item.type} display={item.displayId} />,
    item.title,
    <ProfilePicture
      key={`owner_pfp_${item.displayId}`}
      size="xs"
      name={item.owner.name}
      color={item.owner?.color}
    />,
    <StagePill key="stage" stage={item.stage} />,
    <div key={`tags_${item.displayId}`} className="flex items-center">
      {item.tags.map((tag) => (
        <Tag key={tag.name} name={tag.name} />
      ))}
    </div>,
    <p
      className="text-default font-medium text-gray-600"
      key={`update_${item.displayId}`}
    >
      {item.priority}
    </p>,
  ];
};

export default convertToIssueTableRow;
