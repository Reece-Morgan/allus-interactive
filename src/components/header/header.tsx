import { Box } from "@mui/material";
import theme from "../../theme";
import banner from "../../assets/banners/banner-large-transparent.svg";

export const Header = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "60px",
        backgroundColor: "transparent",
        borderBottom: `1px solid ${theme.palette.primary.main}`,
      }}
      data-testId="header"
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
          src={banner}
          alt="Allus Interactive banner"
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
