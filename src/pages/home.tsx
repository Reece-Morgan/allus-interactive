import { Box, Typography } from "@mui/material";
import { GameTile, Hero, Section } from "@components";
import theme from "../theme";
import logo from "../assets/logo/logo.svg";
import grillMaster from "../assets/game-tiles/grill-master.svg";
import pixelSurvivor from "../assets/game-tiles/pixel-survivor.svg";
import trialsOfKhione from "../assets/game-tiles/trials-of-khione.svg";
import about from "../assets/sections/about.svg";
import mgj from "../assets/sections/mgj.svg";
import games from "../assets/sections/games.svg";
import { aboutText, mgjText, gamesText } from "../data/constants";

const Home = () => {
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
        // TODO: remove id after implementing separate Games page
        id="games"
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
      <Section
        isReversed={false}
        img={about}
        altText="About Us"
        title="About Us"
        text={aboutText}
        id="about"
      />
      <Section
        isReversed={true}
        img={games}
        altText="Games Catalogue"
        title="Our Games"
        text={gamesText}
      />
      <Section
        isReversed={false}
        img={mgj}
        altText="Moray Game Jam"
        title="Moray Game Jam"
        text={mgjText}
      />
    </>
  );
};

export default Home;
