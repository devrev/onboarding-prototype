import { bgColors } from "@/constants";

export const users = [
  "John Snow",
  "Elon Musk",
  "James Gunn",
  "Sherlock Holmes",
  "John Snow",
  "Elon Musk",
  "James Gunn",
  "Sherlock Holmes",
  "John Snow",
  "Elon Musk",
  "James Gunn",
  "Sherlock Holmes",
  "John Snow",
  "Elon Musk",
  "James Gunn",
  "Sherlock Holmes",
  "John Snow",
  "Elon Musk",
  "James Gunn",
  "Sherlock Holmes",
].map(user => ({
  name: user,
  revOrg: "DevRev",
  tickets: Math.floor(Math.random() * (200 - 10) + 10),
  color: bgColors[Math.floor(Math.random() * (bgColors.length))]
}));

export const issues = [
  {
    displayId: "TKT-1318",
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
    type: 'ticket'
  },
  {
    displayId: "TKT-1402",
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
    type: 'ticket'
  },
  {
    displayId: "TKT-1408",
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
    type: 'ticket'
  },
  {
    displayId: "TKT-1412",
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
    type: 'ticket'
  },
];
