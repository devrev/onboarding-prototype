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
    type: "point",
    target: "#conv_1318__conv-source",
    content: "Customer conversations from all sources show up here.",
    disableBeacon: true,
    placement: "right",
  },
  {
    type: "wait",
    delay: 4000,
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
    content:
      "Type in your reply and just hit enter. The message is sent on the original channel where the conversation originated from.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "exec",
    delay: 5000,
    func: (store) => {
      store.data.panes.conversation.chat.push({
        type: "rev",
        name: revUser.name,
        revOrg: revUser.revOrg,
        text: "Oops! Seems like I missed that. Yup on a second run the request succeeds with the bearer token. Thanks for all the help!",
      });
    },
  },
  {
    type: "fill",
    target: "#textBox__textarea",
    text: "Sure no issues, have a nice day!",
  },
  {
    type: "point",
    target: "#textBox__send-btn",
    content: "Click to send and build stronger customer relations!",
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
        text: "Sure, have a nice day!",
      });
      document.getElementById("textBox__textarea").innerHTML = "";
    },
  },
  {
    type: "point",
    target: "#filter-Stage",
    content: "Click to mark this conversation as resolved.",
    disableBeacon: true,
    placement: "left",
  },
  {
    type: "click",
    target: "#filter-Stage",
    func: (store) => {
      store.data.panes.conversation.filters[0] = {
        name: "Stage",
        value: "Resolved",
      };
      store.data.lists.conversations.shift();
    },
  },
  {
    type: "point",
    target: "#conv_1318__conv-source",
    content:
      "The resolved conversation is archived and moved away from the active inbox.",
    disableBeacon: true,
    placement: "bottom",
  },
  {
    type: "wait",
    delay: 6000,
  },
  {
    type: "end",
  },
];
