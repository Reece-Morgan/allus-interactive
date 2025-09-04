import { Box } from "@mui/material";
import logo from "./assets/logo.svg";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          padding: "2rem 0 0 0",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Allus Interactive Logo"
          sx={{ width: "400px", height: "auto", minWidth: "300px" }}
        />
        <br />
        <h2>New Site Coming Soon!</h2>
      </Box>
      <Footer />
    </>
  );
};

export default App;
