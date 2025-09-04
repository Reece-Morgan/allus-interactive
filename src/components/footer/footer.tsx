import { Box, IconButton, Stack } from "@mui/material";
import { Instagram, X } from "@mui/icons-material";
import theme from "../../theme";
import logo from "../../assets/banner-small-transparent.svg";

const SocialIcons = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <IconButton
        color="primary"
        href="https://www.instagram.com/allusinteractive/"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
      >
        <Instagram />
      </IconButton>
      <IconButton
        color="primary"
        href="https://x.com/AllusGameDev"
        target="_blank"
        rel="noopener"
        aria-label="X (formerly Twitter)"
      >
        <X />
      </IconButton>
    </Stack>
  );
};

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "transparent",
        borderTop: `1px solid ${theme.palette.primary.main}`,
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p>&copy; Allus Interactive 2025. All rights reserved.</p>
        <SocialIcons />
        <Box
          component="img"
          src={logo}
          alt="Allus Interactive Logo"
          sx={{ width: "auto", height: "75px", minWidth: "300px" }}
        />
      </Box>
    </Box>
  );
};
