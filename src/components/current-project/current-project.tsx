import { Box, Typography } from "@mui/material";
import theme from "../../theme";

interface Props {
  gameName: string;
  img: string;
  altText: string;
  text: string;
}

export const CurrentProject = ({ gameName, img, altText, text }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-around",
        alignItems: {
          xs: "center",
        },
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Box
        component="img"
        src={img}
        alt={altText}
        sx={{
          width: "300px",
          height: "auto",
          minWidth: "300px",
          paddingBottom: "0",
          borderRadius: "15px",
        }}
      />
      <div>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 800,
            color: theme.palette.primary.main,
          }}
          data-testId="current-project-title"
        >
          {gameName}
        </Typography>
        <Typography
          sx={{
            whiteSpace: "pre-line",
            padding: {
              xs: "10px 0 30px 0;",
              md: "0",
            },
            textAlign: "justify",
          }}
          data-testid="current-project-text"
        >
          {text}
        </Typography>
      </div>
    </Box>
  );
};
