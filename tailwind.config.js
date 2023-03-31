const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

const withOpacity = (color, variant) => {
  let variableName = null;
  if (variant) {
    variableName = `--color-${color}-${variant}`;
  } else {
    variableName = `--color-${color}`;
  }
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
};

const shadesBlackWhite = () => {
  colorObj = {};
  const opacities = [
    3, 5, 8, 10, 12, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100,
  ];

  colorObj["black"] = {};
  opacities.forEach((opacity) => {
    colorObj["black"][opacity] = `hsla(0, 0%, 0%, ${opacity / 100})`;
  });
  colorObj["black"].DEFAULT = `hsla(0, 0%, 0%)`;

  colorObj["white"] = {};
  opacities.forEach((opacity) => {
    colorObj["white"][opacity] = `hsla(0, 0%, 100%, ${opacity / 100})`;
  });
  colorObj["white"].DEFAULT = `hsla(0, 0%, 100%)`;
  return colorObj;
};

const colorSetter = (colorObj, colors, variants) => {
  colors.forEach((color) => {
    colorObj[color] = {};
    variants.forEach((variant) => {
      colorObj[color][variant] = withOpacity(color, variant);
    });
  });
  return colorObj;
};

const colorSetterWithOpacity = (colorObj, colors, opacities) => {
  colors.forEach((color) => {
    colorObj[color] = {};
    colorObj[color].DEFAULT = withOpacity(color, null);
    opacities.forEach((opacity) => {
      colorObj[color][opacity] = withOpacity(color, null, opacity / 100);
    });
  });
  return colorObj;
};

const colorBuilder = () => {
  const colors = [
    "accent",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "teal",
    "purple",
    "sky-blue",
  ];
  const colorsVariants = ["dark", "medium", "light"];

  let colorObj = {};
  //All colors
  colorObj = colorSetter(colorObj, colors, colorsVariants);

  colorObj = colorSetter(colorObj, ["blue-medium", "red-medium"], ["hover"]);

  //gray
  colorObj = colorSetter(
    colorObj,
    ["gray"],
    [950, 900, 800, 700, 600, 500, 400, 300, 200, 100]
  );

  let shadesColor = shadesBlackWhite();
  return {
    transparent: "transparent",
    ...colorObj,
    ...shadesColor,
    current: "currentColor",
  };
};

const getTrailsColors = () => {
  return {
    "trails-product": withOpacity("trails-product"),
    "trails-feature": withOpacity("trails-feature"),
    "trails-capability": withOpacity("trails-capability"),
    "trails-runnable": withOpacity("trails-runnable"),
    "trails-enhancement": withOpacity("trails-enhancement"),
    "trails-linkable": withOpacity("trails-linkable"),
    "trails-customPart": withOpacity("trails-customPart"),
    "trails-microservice": withOpacity("trails-microservice"),
    "trails-component": withOpacity("trails-component"),
  };
};

const vistaColors = () => {
  return {
    "color-support-vistas": "var(--color-support-vistas)",
    "color-build-vistas": "var(--color-content-accent-issue)",
    "color-customer-vistas": "var(--color-customer-vistas)",
  };
};

const fontSizeBuilder = () => {
  function getFontSize(key) {
    return defaultTheme.fontSize[key][0];
  }
  function getLineHeight(key) {
    return defaultTheme.lineHeight[key];
  }
  return {
    h1: [getFontSize("xl"), { lineHeight: getLineHeight("7") }],
    h2: [getFontSize("base"), { lineHeight: getLineHeight("6") }],
    h3: [getFontSize("sm"), { lineHeight: getLineHeight("5") }],
    default: [getFontSize("sm"), { lineHeight: getLineHeight("5") }],
    small: [getFontSize("xs"), { lineHeight: getLineHeight("4") }],
    tiny: ["0.625rem", { lineHeight: getLineHeight("3") }],
  };
};

function fontSizeObjectAccessor() {
  const customizedFontSize = fontSizeBuilder();
  return function getStyleTuple(key) {
    const fontSize = customizedFontSize[key][0];
    const lineHeight = customizedFontSize[key][1].lineHeight;
    return { fontSize, lineHeight };
  };
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["capitalize", "lowercase"],
  theme: {
    colors: colorBuilder(),
    fontSize: fontSizeBuilder(),
    extend: {
      animation: {
        "spin-reverse": "spin 1s linear infinite reverse",
      },
      backgroundColor: {
        // Badge
        badge: {
          DEFAULT: "var(--bg-badge)",
          hovered: "var(--bg-badge-hovered)",
        },

        accent: `var(--color-background-accent)`,

        // Pill
        pill: {
          DEFAULT: "var(--bg-pill)",
          hovered: "var(--bg-pill-hovered)",
          selected: "var(--bg-pill-selected)",
        },

        // Menu
        menu: {
          DEFAULT: "var(--bg-menu)",
          hovered: "var(--bg-menu-hovered)",
          selected: "var(--bg-menu-selected)",
          "selected-hovered": "var(--bg-menu-selected-hovered)",
        },

        // Area
        area: {
          DEFAULT: "var(--bg-area)",
          hovered: "var(--bg-area-hovered)",
          selected: "var(--bg-area-selected)",
          "selected-hovered": "var(--bg-area-selected-hovered)",
        },

        "lifted-area": "var(--bg-lifted-area)",
        "lifted-area-hovered": "var(--bg-lifted-area-hovered)",
        "sunk-area": "var(--bg-sunk-area)",

        // Button
        button: {
          primary: "var(--bg-button-primary)",
          "primary-hovered": "var(--bg-button-primary-hovered)",
          secondary: "var(--bg-button-secondary)",
          "secondary-hovered": "var(--bg-button-secondary-hovered)",
          tertiary: "var(--bg-button-tertiary)",
          "tertiary-hovered": "var(--bg-button-tertiary-hovered)",
          muted: "var(--bg-button-muted)",
          "muted-hovered": "var(--bg-button-muted-hovered)",
          brand: "var(--bg-button-brand)",
          "brand-hovered": "var(--bg-button-brand-hovered)",
          destructive: "var(--bg-button-destructive)",
          "destructive-hovered": "var(--bg-button-destructive-hovered)",
        },

        // Toggle
        toggle: {
          DEFAULT: "var(--bg-toggle)",
          active: "var(--bg-toggle-active)",
          disabled: "var(--bg-toggle-disabled)",
        },

        // Input
        input: "var(--bg-input)",
        "nav-search": "var(--bg-nav-search)",
        "menu-search": "var(--bg-menu-search)",

        // Toggle
        toggle: {
          DEFAULT: "var(--bg-toggle)",
          active: "var(--bg-toggle-active)",
          disabled: "var(--bg-toggle-disabled)",
        },

        // Base
        base: "var(--bg-base)",
        overlay: "var(--bg-overlay)",

        // Work
        issue: "var(--color-background-accent-issue)",
        ticket: "var(--color-background-accent-ticket)",
        conversation: "var(--color-background-accent-conversation)",

        // Charts
        chart: {
          tooltip: "var(--bg-chart-tooltip)",
          medium: "var(--bg-chart-medium)",
          light: "var(--bg-chart-light)",
        },

        // Others
        "dotted-loader": "var(--bg-dotted-loader)",
        scrollbar: {
          DEFAULT: "var(--bg-scrollbar)",
          hovered: "var(--bg-scrollbar-hovered)",
        },
        "media-overlay": "var(--bg-media-overlay)",
        success: "var(--bg-success)",
        failure: "var(--bg-failure)",
        warning: "var(--bg-warning)",

        // Trails
        ...getTrailsColors(),
      },
      borderColor: {
        default: "var(--border-default)",
        hovered: "var(--border-hovered)",
        selected: "var(--border-selected)",
        "selected-hovered": "var(--border-selected-hovered)",
        input: "var(--border-input)",
        "input-focused": "var(--border-input-focused)",
        checkbox: "var(--border-checkbox)",
        "checkbox-disabled": "var(--border-checkbox-disabled)",
        separator: "var(--border-separator)",
        base: "var(--bg-base)",
        ...getTrailsColors(),
      },
      boxShadow: {
        pill: "var(--shadow-pill)",
        "pill-hovered": "var(--shadow-pill-hovered)",
        tiny: "var(--shadow-tiny)",
        popover: "var(--shadow-popover)",
        modal: "var(--shadow-modal)",
        plug: "var(--shadow-plug)",
        "lifted-area": "var(--shadow-lifted-area)",
        "slide-in": "var(--shadow-slide-in)",
      },
      fontFamily: {
        base: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      height: {
        1.3: "0.313rem",
        22: "5.5rem",
      },
      maxHeight: {
        118: "29.5rem",
      },
      lineHeight: {
        3.5: "0.875rem",
      },
      margin: {
        "page-gutter": "var(--page-gutter)",
      },
      maxWidth: {
        40: "10rem",
        50: "12.5rem",
        60: "15rem",
        72: "18rem",
        100: "25rem",
      },
      minHeight: {
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        9: "2.25rem",
        12: "3rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
      },
      minWidth: {
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        12: "3rem",
        50: "12.5rem",
        60: "15rem",
      },
      padding: {
        "page-gutter": "var(--page-gutter)",
        18: "4.5rem",
      },
      screens: {
        xl: "1680px",
        "2xl": "1920px",
        "sm-max": { max: "639px" },
      },
      spacing: {
        "3px": "3px",
        0.75: "0.1875rem",
      },
      textColor: {
        "color-highlight": "var(--text-color-highlight)",
        "color-primary": "var(--text-color-primary)",
        "color-secondary": "var(--text-color-secondary)",
        "color-tertiary": "var(--text-color-tertiary)",
        "color-disabled": "var(--text-color-disabled)",
        "color-success": "var(--text-color-success)",
        "color-alert": "var(--text-color-alert)",
        "color-warning": "var(--text-color-warning)",
        "color-link": "var(--text-color-link)",
        "color-issue": "var(--text-color-issue)",
        "color-ticket": "var(--text-color-ticket)",
        "color-enhancement": "var(--text-color-enhancement)",
        "color-bug": "var(--text-color-bug)",
        "color-request": "var(--text-color-request)",
        "color-problem": "var(--text-color-problem)",
        "color-conversation": "var(--text-color-conversation)",
        "color-rev-user": "var(--text-color-rev-user)",
        "color-dev-user": "var(--text-color-dev-user)",
        ...getTrailsColors(),
        ...vistaColors(),
      },
      transitionProperty: {
        maxWidth: "maxWidth",
      },
      width: {
        1.3: "0.313rem",
        60: "15rem",
        64: "16rem",
        68.5: "17.125rem",
        75: "18.75rem",
        80: "20rem",
        90: "22.5rem",
        120: "30rem",
        150: "37.5rem",
        200: "50rem",
        240: "60rem",
      },
      zIndex: {
        tooltip: "100",
      },
      borderRadius: {
        xl: "0.75rem",
        "4xl": "3rem",
      },
      gridTemplateColumns: {
        /** The columns should be at least 24rem wide. */
        "min-96": "repeat(auto-fit,minmax(24rem,1fr))",
      },
    },
    namedGroups: ["nested-1"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    plugin(({ addBase, addUtilities }) => {
      const accessor = fontSizeObjectAccessor();
      addBase({
        h1: accessor("h1"),
        h2: accessor("h2"),
        h3: accessor("h3"),
        p: accessor("default"),
        ul: accessor("default"),
      });
      addUtilities({
        ".text-default-stronger": {
          ...accessor("default"),
          fontWeight: defaultTheme.fontWeight.medium,
        },
        ".text-small-stronger": {
          ...accessor("small"),
          fontWeight: defaultTheme.fontWeight.medium,
        },
        ".text-small-stronger": {
          ...accessor("tiny"),
          fontWeight: defaultTheme.fontWeight.bold,
        },
      });
    }),
  ],
};
