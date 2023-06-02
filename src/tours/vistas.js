import { DESKS } from "@/constants";

export const vistaTourSteps = [
  {
    type: "start",
  },
  {
    type: "point",
    target: "#side_nav__tickets",
    content: "Click here to view all the tickets created by your customers or by you on behalf of your customers",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "click",
    target: "#side_nav__tickets",
    func: (store) => {
      store.configs.desks.deskOpen = DESKS.ISSUE_DESK;
    },
  },
  {
    type: "point",
    target: "#side_nav__team_activity",
    content: "Use these default views for your day-to-day support operations",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "click",
    target: "#side_nav__team_activity",
    func: (store) => {
      store.configs.desks.deskOpen = DESKS.TEAM_ACTIVITY_DESK;
    },
  },
  {
    type: "point",
    target: "#side_nav__active_ticket_tracker",
    title: "Ticket Management Made Easy",
    content: "Stay on top of your work with tickets organised by stages",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "click",
    target: "#side_nav__active_ticket_tracker",
    func: (store) => {
      store.configs.desks.deskOpen = DESKS.ACTIVE_TICKET_TRACKER_DESK;
    },
  },
  {
    type: "point",
    target: "#filter__assigned_to_me",
    content: "Easily filter tickets assigned to you and start working on them",
    disableBeacon: true,
    placement: "bottom",
  },
  {
    type: "click",
    target: "#filter__assigned_to_me",
    func: (store) => {
      store.configs.desks.filtered = true;
    },
  },
  {
    type: "point",
    target: "#side_nav__product_assist_tracker",
    title: "Seamless Collaboration",
    content: "Enhance Support and Product collaboration with Tickets organised by stages",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "click",
    target: "#side_nav__product_assist_tracker",
    func: (store) => {
      store.configs.desks.deskOpen = DESKS.PRODUCT_ASSIST_TRACKER_DESK;
    },
  },
  {
    type: "point",
    target: "#action__save_vista",
    content: "Create your own filtered views, save for future use, and easily share with team members",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#action__save_vista",
    func: (store) => {
      store.configs.actions.openSaveAction()
    },
  },
  {
    type: "wait",
    delay: 300,
  },
  {
    type: "point",
    target: "#action__save_title",
    content: "Provide a title",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "wait",
    delay: 1000,
  },
  {
    type: "fill",
    target: "#action__save_title",
    text: "Recent tickets",
  },
  {
    type: "wait",
    delay: 1000,
  },
  {
    type: "point",
    target: "#action__save_bt",
    content: "Save",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#action__save_bt",
    func: (store) => {
      store.configs.actions.saveFilter()
      store.configs.actions.closeSaveAction()
    },
  },
  {
    type: "end",
  },
];