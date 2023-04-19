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
