import { Box } from "@mui/material";
import logo from "./assets/logo/logo.svg";
import { Footer, Header, Hero } from "@components";

const App = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <Hero img={logo} altText="Allus Interactive Logo" />
      </Box>
      <Footer />
    </>
  );
};

export default App;
