export const conversations = [
  {
    displayId: "CONV-1318",
    member: {
      name: "Deepak Gupta",
      revOrg: "Google",
      extra: 2,
    },
    source: "email",
    msg: {
      name: "Manan Sharma",
      revOrg: "Google",
      text: "Thanks! That resolves my query. I will get that setup ASAP.",
    },
    sla: "-",
    ticket: "TKT-1216",
    updated: "yesterday",
    id: "conv_1318",
    stage: "new",
  },
  {
    displayId: "CONV-1312",
    member: {
      name: "James Gunn",
      revOrg: "Spintly",
      extra: 2,
    },
    source: "slack",
    msg: {
      name: "Susan Camera",
      text: "Thank you for writing in, we will respond as soon as possible.While you wait, please add any additional information that may help us with your inquiry.",
    },
    sla: "-",
    ticket: "TKT-1225",
    updated: "yesterday",
    stage: "new",
    id: "conv_1312",
  },
  {
    displayId: "CONV-1311",
    member: {
      name: "Elon Musk",
      revOrg: "SpaceX",
      extra: 2,
    },
    source: "plug",
    msg: {
      name: "Manan Sharma",
      text: "You can refer the API Docs to understand the auth management for all of your employees!",
    },
    sla: "-",
    updated: "yesterday",
    id: "conv_1311",
    stage: "new",
  },
];

export const issues = [
  {
    displayId: "ISS-1318",
    title: "User documentation for new product onboarding workflows",
    owner: {
      name: "Deepak Gupta",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "Revenue",
      },
      {
        name: "+2",
      },
    ],
  },
  {
    displayId: "ISS-1318",
    title: "User documentation for new product onboarding workflows",
    owner: {
      name: "Deepak Gupta",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "Revenue",
      },
      {
        name: "+2",
      },
    ],
  },
  {
    displayId: "ISS-1318",
    title: "User documentation for new product onboarding workflows",
    owner: {
      name: "Deepak Gupta",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "Revenue",
      },
      {
        name: "+2",
      },
    ],
  },
];

export const tickets = [
  {
    displayId: "TKT-1318",
    type: "ticket",
    title: "Payment not going through even after multiple attempts",
    owner: {
      name: "Susan James",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "gateway",
      },
      {
        name: "+1",
      },
    ],
    cluster: "Payment Issues",
  },
  {
    displayId: "TKT-1347",
    title: "Incorrect payment amount on checkout",
    type: "ticket",
    owner: {
      name: "John Peter",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "billing",
      },
    ],
    cluster: "Payment Issues",
  },
  {
    displayId: "TKT-1353",
    title: "Payment confirmation email not received after successful payment",
    type: "ticket",
    owner: {
      name: "Aman Mishra",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "sendgrid-api",
      },
      {
        name: "+2",
      },
    ],
    cluster: "Payment Issues",
  },
  {
    displayId: "TKT-1397",
    title: "Unable to add items to cart, the cart button is not responding",
    type: "ticket",
    owner: {
      name: "John Peter",
    },
    priority: "P0",
    stage: "review",
    tags: [
      {
        name: "cart",
      },
      {
        name: "+3",
      },
    ],
    cluster: "Cart Failures",
  },
  {
    displayId: "TKT-1386",
    title: "Unable to add more than one quantity of an item to the cart",
    type: "ticket",
    owner: {
      name: "Aman Gupta",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "cart",
      },
      {
        name: "+2",
      },
    ],
    cluster: "Cart Failures",
  },
  {
    displayId: "TKT-1457",
    title: "Product images not loading on the product display page",
    type: "ticket",
    owner: {
      name: "Susan John",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "aws-s3",
      },
      {
        name: "+3",
      },
    ],
    cluster: "Product Display Page",
  },
  {
    displayId: "TKT-1465",
    title: "Product display page taking too long to load",
    type: "ticket",
    owner: {
      name: "Manan Sharma",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "fastly",
      },
    ],
    cluster: "Product Display Page",
  },
];

export const updates = [
  {
    type: "issue",
    display: "ISS-1243",
    title: "Payments API is returning 503 for valid requests.",
    owner: {
      name: "Manan Sharma",
    },
    date: "Today",
  },
  {
    type: "issue",
    display: "ISS-1283",
    title: "Item images are not loading in cart.",
    owner: {
      name: "Deepak Gupta",
    },
    date: "Today",
  },
  {
    type: "ticket",
    display: "TKT-787",
    title: "HSBC Cards not working for Arihant Capital on Payment Gateway.",
    owner: {
      name: "John Snow",
    },
    date: "Yesterday",
  },
];
