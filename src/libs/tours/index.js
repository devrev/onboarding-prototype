import { useStore } from "@/mobx/providers";
import React, { useState, useEffect } from "react";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import Tooltip from "../atoms/tooltip";

const typeWriter = (elem, text, index, speed, resolve) => {
  if (index < text.length) {
    elem.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => {
      typeWriter(elem, text, index, speed, resolve);
    }, speed);
  } else {
    resolve();
  }
};

const tourSteps = [
  {
    type: "point",
    target: "#conv_1318",
    content: "Click here to view the conversation",
    disableBeacon: true,
    placement: "auto",
    showNext: true,
    offset: 2,
  },
  {
    type: "click",
    target: "#conv_1318",
    func: (store) => {
      return store.configs.panes.conversationPane.open();
    },
  },
  {
    type: "point",
    target: "#link_tickets",
    content: "Click here to link a ticket",
    disableBeacon: true,
    styles: {
      buttonNext: {
        display: "none",
      },
    },
    placement: "auto",
  },
  {
    type: "click",
    target: "#link_tickets",
    func: (store) => {
      return store.configs.panes.createTicketPane.open();
    },
  },
  {
    type: "point",
    target: "#createTicketPane__title",
    content: "Fill all the details",
    disableBeacon: true,
    styles: {
      buttonNext: {
        display: "none",
      },
    },
    placement: "left",
  },
  {
    type: "fill",
    target: "#createTicketPane__title",
    text: "Sample title here",
  },
  {
    type: "fill",
    target: "#createTicketPane__description",
    text: "Sample Description here",
  },
  {
    type: "point",
    target: "#createTicketPane__part_selector",
    content:
      "Parts are components of your app, chose a part that is most suitable",
    disableBeacon: true,
    styles: {
      buttonNext: {
        display: "none",
      },
    },
    placement: "left",
  },
  {
    type: "click",
    target: "#part_selector",
    func: () => {},
  },
  {
    type: "point",
    target: "#createTicketPane__attributes",
    content:
      "DevRev intelligently fills all the necessary information required.",
    disableBeacon: true,
    styles: {
      buttonNext: {
        display: "none",
      },
    },
    placement: "left",
  },
  {
    type: "wait",
  },
  {
    type: "point",
    target: "#createTicketPane__create_btn",
    content: "Create the ticket",
    disableBeacon: true,
    styles: {
      buttonNext: {
        display: "none",
      },
    },
    placement: "left",
  },
  {
    type: "click",
    target: "#createTicketPane__create_btn",
    func: () => {},
  },
  {
    type: "end",
  },
];

const Tour = () => {
  const [run, setRun] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const store = useStore();
  let index = 0;
  const steps = tourSteps.filter((step) => step.type === "point");
  console.log(steps);

  const handleCallback = (data) => {
    const { action, index, status, type } = data;

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      // Update state to advance the tour
      setStepIndex(index + 1);
    } else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
      setRun(false);
    }

    console.groupCollapsed(type);
    console.log(data); //eslint-disable-line no-console
    console.groupEnd();
  };

  useEffect(() => {
    tourSteps.reduce(async (p, tourStep, idx) => {
      await p;
      if (idx == 0) return Promise.resolve();
      return new Promise((resolve) => {
        if (tourStep.type === "click") {
          document.querySelector(tourStep.target).addEventListener(
            "click",
            () => {
              tourStep.func(store);
              resolve();
            },
            { once: true }
          );
        } else if (tourStep.type === "point") {
          index++;
          setStepIndex(index);
          resolve();
        } else if (tourStep.type === "fill") {
          const elem = document.querySelector(tourStep.target);
          elem.innerHTML = "";
          typeWriter(elem, tourStep.text, 0, 30, resolve);
        } else if (tourStep.type === "wait") {
          setTimeout(() => {
            resolve();
          }, 4000);
        } else if (tourStep.type === "end") {
          setRun(false);
        }
      });
    }, Promise.resolve());
  }, []);

  return (
    <Joyride
      run={run}
      callback={handleCallback}
      stepIndex={stepIndex}
      steps={steps}
      disableOverlay={true}
      hideBackButton={true}
      hideCloseButton={true}
      debug={true}
      tooltipComponent={Tooltip}
      continuous={true}
    />
  );
};

export default Tour;
