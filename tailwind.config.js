/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "#532130",
      darkBlue: "#182F4A",
      blue: "#2D5579",
      yellow: "#EDC16D",
      lightYellow: "#FCF2CE",
      green: "#7FAB37",
      grey: "#8BBDC8",
    },
    fontSize: {
      display: [
        "4.25rem",
        {
          // 68px
          letterSpacing: "-0.078rem", // -1.25px
          lineHeight: "5.525rem", // 130%
        },
      ],
      headline1: [
        "3.5625rem",
        {
          // 57px
          letterSpacing: "0rem", // 0%
          lineHeight: "4.631rem", // 130%
        },
      ],
      headline2: [
        "2.9375rem",
        {
          // 47px
          letterSpacing: "0rem", // 0%
          lineHeight: "3.819rem", // 130%
        },
      ],
      headline3: [
        "2.5rem",
        {
          // 40px
          letterSpacing: "0rem", // 0%
          lineHeight: "3.25rem", // 130%
        },
      ],
      headline4: [
        "2.0625rem",
        {
          // 33px
          letterSpacing: "0rem", // 0%
          lineHeight: "2.681rem", // 130%
        },
      ],
      headline5: [
        "1.6875rem",
        {
          // 27px
          letterSpacing: "0rem", // 0%
          lineHeight: "2.363rem", // 140%
        },
      ],
      headline6: [
        "1.375rem",
        {
          // 22px
          letterSpacing: "0rem", // 0%
          lineHeight: "1.925rem", // 140%
        },
      ],
      lg: [
        "1.1875rem",
        {
          // 19px
          letterSpacing: "0rem", // 0%
          lineHeight: "1.78125rem", // 150%
        },
      ],
      base: [
        "1rem",
        {
          // 16px
          letterSpacing: "0rem", // 0%
          lineHeight: "1.5rem", // 150%
        },
      ],
      sm: [
        "0.875rem",
        {
          // 14px
          letterSpacing: "0rem", // 0%
          lineHeight: "1.3125rem", // 150%
        },
      ],
      xs: [
        "0.8125rem",
        {
          // 13px
          letterSpacing: "0rem", // 0%
          lineHeight: "1.21875rem", // 150%
        },
      ],
      xxs: [
        "0.75rem",
        {
          // 12px
          letterSpacing: "0rem", // 0%
          lineHeight: "0.75rem", // 100%
        },
      ],
      button: [
        "0.875rem",
        {
          // 14px
          letterSpacing: "0.078rem", // 1.25px
          lineHeight: "0.875rem", // 100%
        },
      ],
      inputLabel: [
        "0.875rem",
        {
          // 14px
          letterSpacing: "0rem", // 0%
          lineHeight: "0.875rem", // 100%
        },
      ],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
  },
  plugins: [],
};
