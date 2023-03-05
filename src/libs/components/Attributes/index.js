import ProfilePicture from "@/libs/atoms/profile";
import RevOrgPill from "@/libs/molecules/revOrgPill";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const OwnerAttribute = ({ value }) => {
  return (
    <div className="flex items-center">
      <ProfilePicture name={value} />
      <p className="ml-2">{value}</p>
    </div>
  );
};

const RevOrgAttribute = ({ value }) => {
  return <RevOrgPill name={value} />;
};

const Generic = ({ value }) => {
  return <p>{value}</p>;
};

const fieldMap = {
  owner: OwnerAttribute,
  revOrg: RevOrgAttribute,
};

const Attribute = ({ name, value }) => {
  const RenderComponent = fieldMap[name] || Generic;
  return (
    <div className="flex items-center capitalize mt-4">
      <p className="min-w-[8em] text-small text-gray-700">{name}</p>
      <RenderComponent value={value} />
    </div>
  );
};

const Attributes = ({ attrs }) => {
  return (
    <div>
      <p className="text-tiny text-gray-500">Attributes</p>
      {attrs.map((attr) => (
        <Attribute key={attr.name} name={attr.name} value={attr.value} />
      ))}
      <div className="text-small text-gray-500 flex items-center mt-4">
        <AiOutlinePlus className="mr-1" />
        Add Attributes
      </div>
    </div>
  );
};

export default Attributes;
