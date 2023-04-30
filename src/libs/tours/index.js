import { useStore } from "@/mobx/providers";
import React, { useState, useEffect } from "react";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import Tooltip from "../atoms/tooltip";
import tourParser from "../utils/tourParser";

const Tour = ({ tourSteps }) => {
  const [run, setRun] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const store = useStore();
  const steps = tourSteps.filter((step) => step.type === "point");

  useEffect(() => {
    tourSteps.reduce(async (p, tourStep, idx) => {
      await p;
      if (idx == 1) return Promise.resolve();
      return new Promise((resolve) => {
        if (tourStep.type === "end") {
          setRun(false);
          tourParser.post({ name: "end" });
          return resolve();
        }
        if (tourStep.type === "start") {
          tourParser.post({name: 'start'})
          resolve();
        }
        tourParser[tourStep.type](tourStep, store, resolve, setStepIndex);
      });
    }, Promise.resolve());
  }, []);

  return (
    <Joyride
      run={run}
      stepIndex={stepIndex}
      steps={steps}
      disableOverlay={true}
      hideBackButton={true}
      hideCloseButton={true}
      tooltipComponent={Tooltip}
      continuous={true}
    />
  );
};

export default Tour;
