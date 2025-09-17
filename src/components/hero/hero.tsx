import { Box, Button } from "@mui/material";
import theme from "../../theme";

interface Props {
  img: string;
  altText: string;
  buttonText?: string;
  buttonLink?: string;
  isButtonVisible?: boolean;
}

export const Hero = ({
  img,
  altText,
  buttonText,
  buttonLink,
  isButtonVisible,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        width: "100%",
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        gap: "50px",
      }}
      data-testId="hero"
    >
      <Box
        component="img"
        src={img}
        alt={altText}
        sx={{
          width: "400px",
          height: "auto",
          minWidth: "300px",
          paddingBottom: !isButtonVisible ? "90px" : "0",
        }}
      />
      {isButtonVisible && (
        <>
          <Button
            variant="contained"
            size="large"
            href={buttonLink}
            sx={{ height: "40px" }}
          >
            {buttonText}
          </Button>
        </>
      )}
    </Box>
  );
};
