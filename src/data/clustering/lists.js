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
