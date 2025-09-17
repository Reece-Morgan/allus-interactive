import { Box, Typography } from "@mui/material";
import { Hero } from "@components";
import theme from "../theme";
import logo from "../assets/logo/logo.svg";

const Games = () => {
  return (
    <>
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
      <Typography
        variant="h2"
        component="h1"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: theme.palette.primary.main,
        }}
      >
        Our Games
      </Typography>
    </>
  );
};

export default Games;
