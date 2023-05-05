import { DESKS } from "@/constants";
const devUser = {
  name: "Jon Snow",
};

const revUser = {
  name: "Guest 4315",
  revOrg: "Routing",
};

export const ticketLinkTourSteps = [
  {
    type: "start",
  },
  {
    type: "point",
    target: "#side_nav__inbox",
    content: "Click on Inbox to view all your customer conversations",
    disableBeacon: true,
    placement: "auto",
  },
  {
    type: "click",
    target: "#side_nav__inbox",
    func: (store) => {
      store.configs.desks.deskOpen = DESKS.CONVERSATION_DESK;
    },
  },
  {
    type: "exec",
    func: (store) => {
      store.data.lists.conversations.unshift({
        displayId: "CONV-1317",
        member: {
          name: "Guest 4315",
          revOrg: "Routing",
          extra: 2,
        },
        source: "plug",
        msg: {
          name: "Guest 4315",
          revOrg: "Routing",
          text: "Hey, The Payments API is continuously giving 403 errors. How can I fix it?",
        },
        sla: "-",
        updated: "today",
        stage: "new",
        id: "conv_1317",
      });
    },
  },
  {
    type: "point",
    target: "#conv_1317",
    content:
      "A new conversation just arrived! Click here to chat with your customer",
    disableBeacon: true,
    placement: "bottom",
    offset: -10,
  },
  {
    type: "click",
    target: "#conv_1317",
    func: (store) => {
      store.configs.panes.conversationPane.open();
    },
  },
  {
    type: "point",
    target: "#link_tickets",
    content: "Click here to link a ticket",
    disableBeacon: true,
    placement: "left",
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
    placement: "left",
  },
  {
    type: "fill",
    target: "#createTicketPane__title",
    text: "Payments API failing with 403",
  },
  {
    type: "fill",
    target: "#createTicketPane__description",
    text: "Multiple reports of Payments API failing on POST with 403. Customer reports GET requests work fine. Bearer token is attached all basic debugging has been attempted.",
  },
  {
    type: "point",
    target: "#createTicketPane__part_selector",
    content:
      "Parts represent components that form your product — user facing parts like features or internal parts like API services. Click here to select a part and link this item with that part of your product.",
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
      "DevRev intelligently fills all the necessary information required based on the part you select and the item details.",
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
    content: "Create the ticket",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#createTicketPane__create_btn",
    func: (store) => {
      store.configs.panes.createTicketPane.close();
      store.data.panes.conversation.links.tickets.push({
        type: "ticket",
        display: "TKT-1216",
        title: "Payments API failing with 403",
        f1: "Awaiting Product Assist",
        f2: "High",
        owner: devUser.name,
      });
    },
  },
  {
    type: "point",
    target: "#links__items",
    content:
      "The ticket stays attached with this conversation for all references!",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "wait",
    delay: 8000,
  },
  {
    type: "end",
  },
];
