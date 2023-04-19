import React from "react"
import { IconMap } from "../workPill"

const WorkCounter = ({type = "issue", number}) => {
  const Icon = IconMap[type]
  return (
    <div className="flex items-center text-default text-gray-500">
      <div style={{ fontSize: "18px" }}>
        <Icon />
      </div>
      <p className="text-default ml-2">{number}</p>
    </div>
  );
}

export default WorkCounter