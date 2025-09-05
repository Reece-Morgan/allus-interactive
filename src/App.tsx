import { Box, Typography } from "@mui/material";
import { Footer, GameTile, Header, Hero } from "@components";
import theme from "./theme";
import logo from "./assets/logo/logo.svg";
import grillMaster from "./assets/game-tiles/grill-master.svg";
import pixelSurvivor from "./assets/game-tiles/pixel-survivor.svg";
import trialsOfKhione from "./assets/game-tiles/trials-of-khione.svg";

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
      <Typography
        variant="h2"
        component="h1"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: theme.palette.primary.main,
        }}
      >
        Game Showcase
      </Typography>
      <Box
        sx={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <GameTile
          img={grillMaster}
          altText="Grill Master"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/grill-master"
        />
        <GameTile
          img={trialsOfKhione}
          altText="The Trials of Khione"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/the-trials-of-khione"
        />
        <GameTile
          img={pixelSurvivor}
          altText="Pixel Survivor"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/pixel-survivor"
        />
      </Box>
      <Footer />
    </>
  );
};

export default App;
