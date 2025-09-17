import { Box, Button } from "@mui/material";

interface Props {
  img: string;
  altText: string;
  buttonText: string;
  buttonLink: string;
}

export const GameTile = ({ img, altText, buttonText, buttonLink }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        width: "30%",
        gap: "25px",
      }}
      data-testId="game-tile"
    >
      <Box
        component="img"
        src={img}
        alt={altText}
        sx={{
          width: "300px",
          height: "auto",
          minWidth: "150px",
          paddingBottom: "0",
          borderRadius: "15px",
        }}
      />
      <Button
        variant="outlined"
        size="large"
        href={buttonLink}
        target="_blank"
        rel="noopener"
        sx={{ width: "150px" }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};
