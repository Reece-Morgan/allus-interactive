import { Box, Typography } from "@mui/material";
import theme from "../../theme";

interface Props {
  isReversed: boolean;
  img: string;
  altText: string;
  text: string;
  title: string;
  id?: string;
}

export const Section = ({ isReversed, img, altText, text, title, id }: Props) => {
  return (
    <div data-testid="section" id={id}>
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
          flexDirection: {
            xs: "column",
            md: isReversed ? "row-reverse" : "row",
          },
          justifyContent: "space-around",
          alignItems: {
            xs: "center",
          },
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <Typography
          sx={{
            maxWidth: "75%",
            whiteSpace: "pre-line",
            padding: {
              xs: "10px 0 30px 0;",
              md: "0",
            },
            // textAlign: {
            //   xs: "justify",
            //   md: "initial",
            // },
            textAlign: "justify",
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
