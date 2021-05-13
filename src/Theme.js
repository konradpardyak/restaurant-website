import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main: "#1A100F",
    primary: "#FF5638",
    primaryDark: "#E64D32",
    secondary: "#FAA419",
    secondaryDark: "#D98E16",
    hover: "rgba(0,0,0,.1)",
    hoverLight: "rgba(255,255,255,.1)"
  },
  gradients: {
    main: "linear-gradient(90deg, #FAA419, #FF5638)"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
