import { DESKS } from "@/constants";
import { utils } from "./utils";

export const trailsTourSteps = [
  {
    type: "start",
  },
  {
    type: "point",
    target: "#side_nav__trails",
    content: "Click here to select trails.",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "click",
    target: "#side_nav__trails",
    func: (store) => {
      store.configs.desks.deskOpen = DESKS.TRAILS_DESK;
    },
  },

  {
    type: "wait",
    delay: 600,
  },
  {
    type: "point",
    target: "#prod_financify",
    content: "Click here to expand your product.",
    disableBeacon: true,
    placement: "right",
    offset: -10,
  },
  {
    type: "click",
    target: "#prod_financify",
    func: (store) => {
      utils.trails.openCapabilities(store);
    },
  },
  {
    type: "point",
    target: "#capl_cards",
    content: "Click here to expand your features.",
    disableBeacon: true,
    placement: "right",
    offset: -10,
  },
  {
    type: "click",
    target: "#capl_cards",
    func: (store) => {
      utils.trails.openFeatures(store);
    },
  },
  {
    type: "point",
    target: "#feat_credit",
    content: "Click here to view enhancements.",
    disableBeacon: true,
    placement: "right",
    offset: -10,
  },
  {
    type: "click",
    target: "#feat_credit",
    func: (store) => {
      utils.trails.openEnhancements(store);
    },
  },
  {
    type: "point",
    target: "#enh_credit",
    content: "Click here to view the enhancement details",
    disableBeacon: true,
    placement: "right",
    offset: -10,
  },
  {
    type: "click",
    target: "#enh_credit",
    func: (store) => {
      store.configs.panes.viewEnhancementPane.open();
    },
  },
  {
    type: "end",
  },
];
