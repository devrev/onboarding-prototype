import React from "react";
import WorkPill from "@/libs/molecules/workPill";
import ProfilePicture from "@/libs/atoms/profile";
import StagePill from "@/libs/molecules/stagePill";
import Tag from "@/libs/atoms/tag";
import WorkCounter from "@/libs/molecules/workCounter";

const convertToPartTableRow = (item) => {
  return [
    <WorkPill
      key={item.displayId}
      type={"capability"}
      display={item.displayId}
      useBg={true}
      id={item?.id}
    />,
    <p key="stage"> - </p>,
    <div key="tags" className="flex items-center">
      {item.tags.map((tag) => (
        <Tag key={tag.name} name={tag.name} />
      ))}
    </div>,
    <WorkCounter key="tickets_count" type="ticket" number={item.tickets} />,
    <WorkCounter key="issues_count" type="issue" number={item.issues} />,
    <ProfilePicture
      key="owner_pfp"
      size="xs"
      name={item.owner.name}
      color={item.owner?.color}
    />,
  ];
};

export default convertToPartTableRow;
