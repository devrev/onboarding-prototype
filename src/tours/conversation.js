import { DESKS } from "@/constants";
const devUser = {
  name: "Jon Snow",
};

const revUser = {
  name: "Guest 4315",
  revOrg: "Routing",
};

export const conversationTourSteps = [
  {
    type: "point",
    target: "#side_nav__inbox",
    content: "Click here to view all your customer conversations",
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
    type: "point",
    target: "#conv_1318__conv-source",
    content: "Customer conversations from all sources show up here.",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "wait",
    delay: "4000",
  },
  {
    type: "exec",
    func: (store) => {
      store.data.lists.conversations.unshift({
        displayId: "CONV-1317",
        member: {
          name: devUser.name,
          extra: 1,
        },
        source: "plug",
        msg: {
          name: revUser.name,
          revOrg: revUser.revOrg,
          text: "Hey, The Payments API is continuously giving 403 errors. How can I fix it?",
        },
        ticket: "TKT-1216",
        updated: "yesterday",
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
    placement: "left"
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
    target: "#textBox__send-btn",
    content: "Interact with your customers directly!",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "fill",
    target: "#textBox__textarea",
    text: "Thanks for reporting! Did you check if you are using a valid bearer token in your requests?",
  },
  {
    type: "click",
    target: "#textBox__send-btn",
    func: (store) => {
      store.data.panes.conversation.chat.push({
        type: "dev",
        name: devUser.name,
        text: "Thanks for reporting! Did you check if you are using a valid bearer token in your requests?",
      });
      document.getElementById("textBox__textarea").innerHTML = "";
    },
  },
  {
    type: "point",
    target: "#chatBox__messages",
    content: "View all conversation history for max context.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "exec",
    delay: 2000,
    func: (store) => {
      store.data.panes.conversation.chat.push({
        type: "rev",
        name: revUser.name,
        revOrg: revUser.revOrg,
        text: "Yes the Bearer Token is present. And seems like the GET requests work fine but the POST requests are failing.",
      });
    },
  },
  {
    type: "fill",
    target: "#textBox__textarea",
    text: "Sure, let me quickly open a ticket for the same!",
  },
  {
    type: "point",
    target: "#textBox__send-btn",
    content: "Notify them of any updates to follow.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#textBox__send-btn",
    func: (store) => {
      store.data.panes.conversation.chat.push({
        type: "dev",
        name: devUser.name,
        text: "Sure, let me quickly open a ticket for the same!",
      });
      document.getElementById("textBox__textarea").innerHTML = "";
    },
  },
  {
    type: "point",
    target: "#link_tickets",
    content: "Click here to link a ticket",
    disableBeacon: true,
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
    target: "#createTicketPane__attributes",
    content:
      "DevRev intelligently fills all the necessary information required.",
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
