import { DESKS } from "@/constants";

export const vistaTourSteps = [
  {
    type: "start",
  },
  {
    type: "point",
    target: "#side_nav__tickets",
    title: "All your tickets in one place",
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
    title: "Default views that we have created",
    content: "We have created default views, also called vistas, to help you get started on DevRev. The Team Activity vista provides an overview of your team's workload, so you can see who is working on what with just one click.",
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
    title: "Stay on top of your work with tickets organised by stages",
    content: "This view is where your support team operates. Newer tickets appear under \"Queued,\" and support members can assign themselves tickets and move them into \"Work in Progress\" as soon as they begin working on them. Tickets marked as \"Awaiting Customer Response\" do not require immediate action and help you keep your ticket queue organized.",
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
    title: "Filtering, Sorting and Grouping Tickets",
    content: "Easily filter tickets assigned to you and begin working on them. There are a variety of filtering, sorting, and grouping options available for you to apply based on your personal preference.",
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
    title: "Enhance Support and Product collaboration with Tickets organised by stages",
    content: "The Product Assist Tracker displays tickets that have been escalated to part owners, who can be either PMs or Engineering Managers. These owners can comment on tickets during internal discussions, attach relevant issues, and provide other information to help support members track tickets more effectively. We have included default automations that automatically move ticket stages as linked issues are resolved. This helps your team stay on top of tickets without having to manually follow up.",
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
    title: "Share your views with other members",
    content: "Create your own filtered views that are dynamically updated as new tickets come in. You can save these views for future use, share them with other team members, and collaborate easily.",
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