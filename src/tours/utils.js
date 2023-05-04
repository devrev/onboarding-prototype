const trails_OpenCapabilities = (store) => {
  store.data.lists.trailNodes.push(
    {
      id: "capl_discount",
      type: "custom",
      position: { x: 300, y: 100 },
      data: {
        label: "Discount API",
        type: "capability",
      },
      draggable: false,
    },
    {
      id: "capl_cards",
      type: "custom",
      position: { x: 300, y: 200 },
      data: {
        label: "Cards API",
        type: "capability",
      },
      draggable: false,
    },
    {
      id: "capl_cart",
      type: "custom",
      position: { x: 300, y: 300 },
      data: {
        label: "Cart API",
        type: "capability",
      },
      draggable: false,
    }
  );

  store.data.lists.trailEdges.push(
    {
      id: "e_financify-discount",
      source: "prod_financify",
      sourceHandler: "handle_prod_financify",
      target: "capl_discount",
    },
    {
      id: "e_financify-cards",
      source: "prod_financify",
      sourceHandler: "handle_prod_financify",
      target: "capl_cards",
    },
    {
      id: "e_financify-cart",
      source: "prod_financify",
      sourceHandler: "handle_prod_financify",
      target: "capl_cart",
    }
  );
}

const trails_OpenFeatures = (store) => {
  store.data.lists.trailNodes.push(
    {
      id: "feat_credit",
      type: "custom",
      position: { x: 500, y: 150 },
      data: {
        label: "Credit Card Payments",
        type: "feature",
      },
      draggable: false,
    },
    {
      id: "feat_debit",
      type: "custom",
      position: { x: 500, y: 250 },
      data: {
        label: "Debit Card Payments",
        type: "feature",
      },
      draggable: false,
    }
  );

  store.data.lists.trailEdges.push(
    {
      id: "e_cards-credit",
      source: "capl_cards",
      sourceHandler: "handle_capl_cards",
      target: "feat_credit",
    },
    {
      id: "e_cards-debit",
      source: "capl_cards",
      sourceHandler: "handle_capl_cards",
      target: "feat_debit",
    }
  );
};

const trails_Enhancements = (store) => {
  store.data.lists.trailNodes.push(
    {
      id: "enh_credit",
      type: "custom",
      position: { x: 700, y: 150 },
      data: {
        label: "Credit Card Payments Portal",
        type: "enhancement",
      },
      draggable: false,
    },
  );

  store.data.lists.trailEdges.push({
    id: "e_credit-portal",
    source: "feat_credit",
    sourceHandler: "handle_feat_credit",
    target: "enh_credit",
  });
};

export const utils = {
  trails: {
    openCapabilities: trails_OpenCapabilities,
    openFeatures: trails_OpenFeatures,
    openEnhancements: trails_Enhancements
  }
}