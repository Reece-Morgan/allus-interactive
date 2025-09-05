import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#c31014" },
    background: { default: "#213547" },
  },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    // This replaces global CSS like body/html/reset/link styles
    MuiCssBaseline: {
      styleOverrides: {
        "*": { boxSizing: "border-box", padding: "0", margin: "0" },
        body: {
          color: "#fff",
          margin: "0",
          minWidth: "320px",
          maxHeight: "100vh",
        },
        a: {
          color: "#1976d2",
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
        },
      },
    },
    // Global default button radius, etc. (optional)
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
  },
});

export default theme;
