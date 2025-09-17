import { Box, Link } from "@mui/material";
import theme from "../../theme";
import banner from "../../assets/banners/banner-large-transparent.svg";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
      data-testId="navigation"
    >
      {/* TODO: update links after implementing separate Games page */}
      <Link variant="inherit" underline="hover" href="/">
        Home
      </Link>
      <Link variant="inherit" underline="hover" href="/games">
        Games
      </Link>
      <HashLink smooth to="/#about">
        <Link variant="inherit" underline="hover">
          About
        </Link>
      </HashLink>
    </Box>
  );
};

export const Header = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: {
          xs: "100px",
          sm: "60px",
        },
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        position: "sticky",
        top: "0",
        zIndex: 9,
      }}
      data-testId="header"
    >
      <Box
        sx={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <Box
          component="img"
          src={banner}
          alt="Allus Interactive banner"
          sx={{
            height: "50px",
            width: "auto",
            minWidth: "50px",
            margin: " 5px 0",
          }}
        />
        <Navigation />
      </Box>
    </Box>
  );
};
