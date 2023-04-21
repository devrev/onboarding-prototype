import { DESKS } from "@/constants";
const devUser = {
  name: "Jon Snow",
};

const revUser = {
  name: "Guest 4315",
  revOrg: "Routing",
};

export const sprintTourSteps = [
  {
    type: "point",
    target: "#side_nav__parts",
    content: "Click here to view the capabilities of your product.",
    disableBeacon: true,
    placement: "auto",
  },
  {
    type: "click",
    target: "#side_nav__parts",
    func: (store) => {
      store.configs.desks.deskOpen = DESKS.PARTS_DESK;
    },
  },
  {
    type: "point",
    target: "#discounts_CAPL",
    content: "Click here to select a capability.",
    disableBeacon: true,
    placement: "auto",
  },
  {
    type: "click",
    target: "#discounts_CAPL",
    func: (store) => {
      store.configs.panes.viewEnhancementPane.open();
    },
  },
  {
    type: "point",
    target: "#enhPane__sprint-icon",
    content: "Click here to create a new sprint board.",
    disableBeacon: true,
    placement: "auto",
  },
  {
    type: "click",
    target: "#enhPane__sprint-icon",
    func: (store) => {
      store.configs.panes.viewEnhancementPane.close();
      store.configs.desks.deskOpen = DESKS.SPRINT_DESK;
    },
  },
  {
    type: "point",
    target: "#sprint-1__button",
    content:
      "DevRev intelligently organizes your issues into sprints of the specified durations.",
    disableBeacon: true,
    placement: "auto",
  },
  {
    type: "click",
    target: "#sprint-1__button",
    func: () => {},
  },
  {
    type: "point",
    target: "#backlog__button",
    content:
      "All new issues enter the backlog and can then be moved to the required sprint.",
    disableBeacon: true,
    placement: "auto",
  },
  {
    type: "click",
    target: "#backlog__button",
    func: () => {},
  },
  {
    type: "end",
  },
];