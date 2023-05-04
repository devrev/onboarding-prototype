import React, { memo } from "react";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";
import {
  IconMap as PartIconMap,
  classMap as PartClassMap,
  bgClassMap as PartBgClassMap,
} from "@/libs/components/PartSelector";
import clsx from "clsx";

const TrailsNode = ({ id, data }) => {
  const Icon = PartIconMap[data.type];
  const color = PartClassMap[data.type] + " " + PartBgClassMap[data.type];

  return (
    <>
      <div
        id={id}
        className="custom-node__body flex items-center hover:bg-lifted-area hover:shadow-popover w-fit-content rounded-lg p-2 transition-all"
      >
        <div className={clsx(color, "p-2 rounded-lg text-default")}>
          <Icon className="w-3 h-3" />
        </div>
        <Handle
          type="target"
          position={Position.Left}
          id={`handle-target_${id}`}
        />
        <Handle
          type="source"
          position={Position.Right}
          id={`handle-source_${id}`}
        />
        <div className="text-gray-700 ml-2">{data.label}</div>
      </div>
    </>
  );
};

export default memo(TrailsNode);
