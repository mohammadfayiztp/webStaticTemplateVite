import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  // No custom tokens found, you can skip the theme augmentation.
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#FFC0C0",
          100: "#FFA5A5",
          200: "#FF6A6A",
          300: "#FF4886",
          400: "#FF2178",
          500: "#FF096B",
          600: "#FF1B62",
          700: "#FF2659",
          800: "#FF2F49",
          900: "#FF2F3C",
        },
      },
    },
    dark: {
      palette: {},
    },
  },
});

export default theme;
