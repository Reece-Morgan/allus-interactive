import { Box, Typography } from "@mui/material";
import theme from "../../theme";

interface Props {
  isReversed: boolean;
  img: string;
  altText: string;
  text: string;
  title: string;
}

export const Section = ({ isReversed, img, altText, text, title }: Props) => {
  return (
    <div data-testid="section">
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: theme.palette.primary.main,
        }}
        data-testId="section-title"
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isReversed ? "row-reverse" : "row",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "1280px",
        }}
      >
        <Typography
          sx={{
            maxWidth: "75%",
            whiteSpace: "pre-line",
          }}
          data-testid="section-text"
        >
          {text}
        </Typography>
        <Box
          component="img"
          src={img}
          alt={altText}
          sx={{
            width: "200px",
            height: "auto",
          }}
        />
      </Box>
    </div>
  );
};
