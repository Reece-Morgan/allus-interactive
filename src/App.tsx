import { Box } from "@mui/material";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <Box
      sx={{
        padding: "2rem 0 0 0",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Allus Interactive Logo"
        sx={{ width: "100%", height: "auto", minWidth: "300px" }}
      />
      <h2>New Site Coming Soon!</h2>
    </Box>
  );
};

export default App;
