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
    target: "#side_nav-createWork",
    content: "Click here to create a new issue to work on.",
    disableBeacon: true,
    placement: "auto",
  },
  {
    type: "click",
    target: "#side_nav-createWork",
    func: (store) => {
      store.configs.panes.createTicketPane.setIssueType();
      store.configs.panes.createTicketPane.open();
    },
  },
  {
    type: "point",
    target: "#createTicketPane__title",
    content: "Fill up the details required.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "fill",
    target: "#createTicketPane__title",
    text: "Add provision to add multiple line items on Cart UI",
  },
  {
    type: "fill",
    target: "#createTicketPane__description",
    text: "Currently only single line items are allowed in cart but multiple customer requests indicate a requirement for multiple line items as well.",
  },
  {
    type: "point",
    target: "#createTicketPane__part_selector",
    content:
      "Parts are components of your app, chose a part that is most suitable for this issue.",
    disableBeacon: true,
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
      "DevRev intelligently fills all the necessary information required for this issue.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "wait",
    delay: 8000,
  },
  {
    type: "point",
    target: "#createTicketPane__create_btn",
    content: "Create the issue.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#createTicketPane__create_btn",
    func: (store) => {
      store.configs.panes.createTicketPane.close();
    },
  },
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