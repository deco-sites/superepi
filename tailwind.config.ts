import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        "page-container": "81.25rem",
      },
    },
    screens: {
      smA: "508.125px",
      md: "641.25px",
      mdA: "774.375px",
      lg: "907.5px",
    },
  },
};
