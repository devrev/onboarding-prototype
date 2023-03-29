import React from "react";
import {
  AiOutlineLink,
  AiOutlineDelete,
  AiOutlineTags,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FiBarChart, FiFlag } from "react-icons/fi";
import { BsBoundingBoxCircles } from "react-icons/bs";

const BulkAction = ({ children, id }) => {
  return (
    <div
      id={id}
      className="p-1 rounded-full mx-0.5 hover:bg-pill-hovered cursor-pointer text-sm"
    >
      {children}
    </div>
  );
};

const BulkActions = ({ items = 3 }) => {
  return (
    <div className="absolute top-5 left-9 z-40 bg-overlay shadow-popover rounded-lg p-2">
      <div className="flex items-center">
        <p className="text-sm">{items} selected</p>
        <div className="ml-2 flex items-center">
          <BulkAction>
            <AiOutlineLink />
          </BulkAction>
          <BulkAction>
            <AiOutlineUserAdd />
          </BulkAction>
          <BulkAction>
            <FiBarChart />
          </BulkAction>
          <BulkAction>
            <FiFlag />
          </BulkAction>
          <BulkAction>
            <AiOutlineTags />
          </BulkAction>
          <BulkAction>
            <AiOutlineDelete />
          </BulkAction>
          <BulkAction>
            <BsBoundingBoxCircles />
          </BulkAction>
        </div>
      </div>
    </div>
  );
};

export default BulkActions;
