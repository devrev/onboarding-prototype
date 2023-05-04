import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import TrailsNode from "@/libs/atoms/trailNode";

import "reactflow/dist/style.css";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";
import { toJS } from "mobx";

const nodeTypes = {
  custom: TrailsNode,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
};

const OverviewFlowBase = observer(() => {
  const store = useStore();

  const edges = store.data.lists.trailEdges;
  const nodes = store.data.lists.trailNodes;
  const [zoom, setZoom] = useState(2);
  const [yPos, setYPos] = useState(0)
  const [xPos, setXPos] = useState(150);


  const { setViewport } = useReactFlow();

  const handleTransform = () => {
    setViewport({ zoom: zoom, x: xPos, y: yPos }, { duration: 400 });
    setYPos((y) => y + 25)
    setXPos((x) => x - 25)
    setZoom((z) => z - (z / 15));
  };

  return (
    <ReactFlow
      nodes={toJS(nodes)}
      edges={toJS(edges)}
      onNodesChange={handleTransform}
      onInit={onInit}
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
      fitView
      panOnDrag={false}
      zoomOnPinch={false}
      zoomOnScroll={false}
    >
      <MiniMap style={minimapStyle} />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
});

const OverviewFlow = observer(() => {
  return (
    <ReactFlowProvider>
      <OverviewFlowBase />
    </ReactFlowProvider>
  );
});

export default OverviewFlow;
