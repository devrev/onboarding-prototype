export const issues = [
  {
    displayId: "ISS-1318",
    title: "Render latest PNG images on Product catalog page ",
    owner: {
      name: "Deepak Gupta",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "s3-bucket",
      },
      {
        name: "+3",
      },
    ],
    sprint: "one",
  },
  {
    displayId: "ISS-1402",
    title:
      "Update Payment amount calculation service with discount API connect",
    owner: {
      name: "Mollie Holland",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "discount",
      },
    ],
    sprint: "backlog",
  },
  {
    displayId: "ISS-1408",
    title: "Add support for International Credit cards with PayPal APIs",
    owner: {
      name: "Manan Sharma",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "paypal",
      },
      {
        name: "+3",
      },
    ],
    sprint: "backlog",
  },
  {
    displayId: "ISS-1412",
    title: "Fix Back button caching on Brave browser & Chrome",
    owner: {
      name: "Mollie Holland",
    },
    priority: "P1",
    stage: "review",
    tags: [
      {
        name: "browser",
      },
    ],
    sprint: "two",
  },
];

export const parts = [
  {
    displayId: "Discount API",
    owner: {
      name: "Deepak Gupta",
    },
    tags: [
      {
        name: "Core",
      },
      {
        name: "+2",
      },
    ],
    tickets: 4,
    issues: 4,
    id: "discounts_CAPL"
  },
  {
    displayId: "Payment Gateway",
    owner: {
      name: "Jane Austin",
    },
    tags: [
      {
        name: "Revenue",
      },
      {
        name: "+2",
      },
    ],
    tickets: 9,
    issues: 1,
  },
  {
    displayId: "Coupon Manager",
    owner: {
      name: "Sherlock Holmes",
    },
    tags: [
      {
        name: "Core",
      },
      {
        name: "Beta",
      },
    ],
    tickets: 8,
    issues: 2,
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
    display: "TKT-7877",
    title: "HSBC Cards not working for Arihant Capital on Payment Gateway.",
    owner: {
      name: "John Snow",
    },
    date: "Yesterday",
  },
];
