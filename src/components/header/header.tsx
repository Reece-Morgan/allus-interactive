import { Box } from "@mui/material";
import theme from "../../theme";
import logo from "../../assets/banner-large-transparent.svg";

export const Header = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "60px",
        backgroundColor: "transparent",
        borderBottom: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Allus Interactive Logo"
          sx={{
            height: "50px",
            width: "auto",
            minWidth: "50px",
            margin: " 5px 0",
          }}
        />
      </Box>
    </Box>
  );
};
