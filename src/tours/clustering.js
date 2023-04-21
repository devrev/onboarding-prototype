import { DESKS } from "@/constants";
const devUser = {
  name: "Jon Snow",
};

const revUser = {
  name: "Guest 4315",
  revOrg: "Routing",
};

export const clusteringTourSteps = [
  {
    type: "point",
    target: "#side_nav__tickets",
    content: "Click here to view tickets raised by customer support",
    disableBeacon: true,
    placement: "auto",
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
    target: "#sort_field-Group",
    content: "Click here to group the tickets.",
    disableBeacon: true,
    placement: "auto",
  },
  {
    type: "click",
    target: "#sort_field-Group",
    func: () => {},
  },
  {
    type: "wait",
    delay: 100,
  },
  {
    type: "point",
    target: "#Similarity",
    content:
      "Our group by similarity feature intelligently scans all tickets and groups similar ones based on context into clusters",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#Similarity",
    func: (store) => {
      store.configs.desks.deskOpen = DESKS.CLUSTERING_DESK;
    },
  },
  {
    type: "wait",
    delay: 100,
  },
  {
    type: "point",
    target: "#badge-payment_issues",
    content:
      "Tickets related to payment issues are all grouped together under this cluster",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "wait",
    delay: 6000,
  },
  {
    type: "point",
    target: "#table_checkBox",
    content:
      "Click here to select all tickets grouped under this cluster to perform some bulk actions",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "click",
    target: "#table-payment_issues #table_checkBox",
    func: (store) => {
      store.configs.actions.isBulkActionOpen = true;
    },
  },
  {
    type: "point",
    target: "#action_enhancement",
    content:
      "Create an enhancement to work on all the tickets related to payment issues here",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#action_enhancement",
    func: (store) => {
      store.configs.panes.createEnhancementPane.open();
    },
  },
  {
    type: "point",
    target: "#createEnhPane__title",
    content: "Fill all the details to create an enhancement.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "fill",
    target: "#createEnhPane__title",
    text: "Revamp payment workflow",
  },
  {
    type: "fill",
    target: "#createEnhPane__description",
    text: "This is to make the payment workflow more transparent and robust to help our customers have a more seamless payment experience",
  },
  {
    type: "point",
    target: "#createEnhPane__part_selector",
    content:
      "Parts are components of your app, chose a part that is most suitable",
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
    target: "#createEnhPane__attributes",
    content:
      "DevRev intelligently fills all the necessary information required.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "wait",
    delay: 6000,
  },
  {
    type: "point",
    target: "#links_header-docs",
    content:
      "Various stages of efforts can be documented and tracked here in one place for this enhancement by linking the documents. Click on docs to link them.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#links_header-docs",
    func: () => {},
  },
  {
    type: "point",
    target: "#createEnhPane__create_btn",
    content: "Click here to create the enhancement",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#createEnhPane__create_btn",
    func: (store) => {
      store.configs.panes.createEnhancementPane.close();
    },
  },
  {
    type: "end",
  },
];
