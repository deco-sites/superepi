import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        "roboto": ['Roboto', 'sans-serif']
      },
      maxWidth: {
        "page-container": "81.25rem",
      }
    },
    screens: {
      "sm": "0px",
      "md": "641.25px",
      "lg": "907.5px",
    }
  }
};
