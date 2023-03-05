import React from "react";
import WorkPill from "@/libs/molecules/workPill";
import ProfilePicture from "@/libs/atoms/profile";
import StagePill from "@/libs/molecules/stagePill";
import Tag from "@/libs/atoms/tag";

const convertToIssueTableRow = (issue) => {
  return [
    <WorkPill key={issue.displayId} type="issue" display={issue.displayId} />,
    issue.title,
    <ProfilePicture
      key="owner_pfp"
      size="xs"
      name={issue.owner.name}
      color={issue.owner?.color}
    />,
    <StagePill key="stage" stage={issue.stage} />,
    <div key="tags" className="flex items-center">
      {issue.tags.map((tag) => (
        <Tag key={tag.name} name={tag.name} />
      ))}
    </div>,
    <p className="text-default font-medium text-gray-600" key="update">
      {issue.priority}
    </p>,
  ];
};

export default convertToIssueTableRow;
