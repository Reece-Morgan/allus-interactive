import { Box, Typography } from "@mui/material";
import { GameTile, Hero } from "@components";
import theme from "../theme";
import logo from "../assets/logo/logo.svg";

import placeholder from "../assets/placeholder.svg";

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
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: theme.palette.primary.main,
        }}
      >
        Latest Release
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
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
      </Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: theme.palette.primary.main,
        }}
      >
        Moray Game Jam
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
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
        <GameTile
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
        <GameTile
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
      </Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: theme.palette.primary.main,
        }}
      >
        IGS Game Jams
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
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
        <GameTile
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
      </Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: theme.palette.primary.main,
        }}
      >
        Other Game Jams
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
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
      </Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: theme.palette.primary.main,
        }}
      >
        Demos & Prototypes
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
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
        <GameTile
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
        <GameTile
          img={placeholder}
          altText="Placeholder"
          buttonText="Play Now"
          buttonLink="https://allusinteractive.itch.io/"
        />
      </Box>
    </>
  );
};

export default Games;
