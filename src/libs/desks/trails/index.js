import React from "react";
import OverviewFlow from "./flow";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";
import { DESKS } from "@/constants";
import ReactFlowProvider, { useReactFlow } from "reactflow";

const TrailsDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.TRAILS_DESK;

  return (
    isOpen && (
      <div className="w-screen h-screen">
        <OverviewFlow />
      </div>
    )
  );
});

export default TrailsDesk;
