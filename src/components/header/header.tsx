import { Box } from "@mui/material";
import theme from "../../theme";
import banner from "../../assets/banners/banner-large-transparent.svg";

// const Navigation = () => {
//   return (
//     <Box
//       sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
//       data-testId="navigation"
//     >
//       {/* TODO: update links after implementing separate Games page */}
//       <Link variant="inherit" underline="hover" href="#">
//         Home
//       </Link>
//       <Link variant="inherit" underline="hover" href="#games">
//         Games
//       </Link>
//       <Link variant="inherit" underline="hover" href="#about">
//         About
//       </Link>
//     </Box>
//   );
// };

export const Header = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        // TODO: add style back in for navigation links
        // height: {
        //   xs: "100px",
        //   sm: "60px",
        // },
        height: "60px",
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
            maxHeight: "50px",
            width: "auto",
            minWidth: "300px",
            margin: " 5px 0",
          }}
        />
      </Box>
    </Box>
  );
};
