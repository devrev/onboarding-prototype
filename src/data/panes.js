export const conversation = {
  revUser: {
    revOrg: "Routing",
    name: "Guest 4315",
  },
  revOrg: "Routing",
  title: "Payments Issue",
  filters: [
    {
      name: "type",
      value: "capability"
    },
    {
      name: "Stage",
      value: "New",
    },
    {
      name: "Members",
      value: "1",
    },
    {
      name: "Tags",
      value: "2",
    },
  ],
  links: {
    tickets: [
      {
        type: "ticket",
        display: "TKT-1216",
        title: "Payments API failing with 403",
        f1: "Awaiting Product Assist",
        f2: "High",
        owner: "Deepak Gupta",
      },
      {
        type: "ticket",
        display: "TKT-1216",
        title: "Payments API failing with 403",
        f1: "Awaiting Product Assist",
        f2: "High",
        owner: "Deepak Gupta",
      },
      {
        type: "ticket",
        display: "TKT-1216",
        title: "Payments API failing with 403",
        f1: "Awaiting Product Assist",
        f2: "High",
        owner: "Deepak Gupta",
      },
    ],
  },
  chat: [
    {
      type: "rev",
      name: "Guest 4315",
      revOrg: "Routing",
      text: "Hey, The Payments API is continuously giving 403 errors. How can I fix it?",
    },
  ],
};

export const enhancement = {
  links: {
    tickets: [
      {
        type: "ticket",
        display: "TKT-1318",
        title: "Payment not going through even after multiple attempts",
        f1: "Awaiting Product Assist",
        f2: "Medium",
        owner: "Susan James",
      },
      {
        type: "ticket",
        display: "TKT-1347",
        title: "Incorrect payment amount on checkout",
        f1: "Awaiting Product Assist",
        f2: "High",
        owner: "John Peter",
      },
      {
        type: "ticket",
        display: "TKT-1353",
        title:
          "Payment confirmation email not received after successful payment",
        f1: "Awaiting Customer Assist",
        f2: "Low",
        owner: "Aman Mishra",
      },
    ],
    docs: [
      {
        type: "doc",
        title: "PRD",
        value: "PRD Payments Infra",
      },
      {
        type: "doc",
        title: "Design",
        value: "Payments Design",
      },
    ],
  },
};
