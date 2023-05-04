import { DESKS } from "@/constants";
import { utils } from "./utils";

export const trailsTourSteps = [
  {
    type: "start",
  },
  {
    type: "point",
    target: "#side_nav__trails",
    content:
      "Click here to open trails: Build your Product architecture. Tickets & Issues are all tied to the parts of your product in a tree/mindmap form.",
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
    type: "point",
    target: "#side_nav__trails",
    content:
      "Trails showcase the blueprint of your Product architecture. Your Product as viewed by the market would be a collection of Capabilities which in turn are a collection of features. Align all your teams towards delivering the Product & its improvements and view feedback all at one place",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "wait",
    delay: 10000,
  },
  {
    type: "point",
    target: "#prod_financify",
    content: "Click to view the capabilities under this Product.",
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
    content: "Click to view the Features under this Capability",
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
    content: "Click to view and create Enhancements under this feature.",
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
    content:
      "Click to view the details of the Enhancement - summary, owner, Tickets & Issues linked, Docs and more",
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
