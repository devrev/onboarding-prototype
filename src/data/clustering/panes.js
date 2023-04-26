export const createEnhancement = {
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

export const viewEnhancement = {
  title: "Revamp payment workflow",
  subtitle: "This is to make the payment workflow more transparent and robust to help our customers have a more seamless payment experience",
  filters: [
    {
      name: "type",
      value: "enh",
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
    tickets: [],
  },
};

