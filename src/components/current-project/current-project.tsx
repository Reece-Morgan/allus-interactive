import { Box, Typography } from "@mui/material";
import theme from "../../theme";
import pda_view_2 from "../../assets/current-project/pda_view_2.png";
import house_exterior_1 from "../../assets/current-project/house_exterior_1.png";
import shop_interior_1 from "../../assets/current-project/shop_interior_1.png";
import shop_exterior from "../../assets/current-project/shop_exterior.png";
import shop_interior_2 from "../../assets/current-project/shop_interior_2.png";
import house_exterior_2 from "../../assets/current-project/house_exterior_2.png";

interface Props {
  gameName: string;
  text: string;
  isLiveOnItch: boolean;
}

export const CurrentProject = ({ gameName, text, isLiveOnItch }: Props) => {
  return (
    <>
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
        <a href={pda_view_2} target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src={pda_view_2}
            alt="Speedy Shopper - PDA View"
            sx={{
              width: "300px",
              height: "auto",
              minWidth: "300px",
              paddingBottom: "0",
              borderRadius: "15px",
            }}
          />
        </a>
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                color: theme.palette.primary.main,
              }}
              data-testId="current-project-title"
            >
              {gameName} -
            </Typography>
            <>
              {isLiveOnItch ? (
                <Typography
                  component="a"
                  variant="h4"
                  href="https://allusinteractive.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontWeight: 800,
                    color: theme.palette.primary.main,
                  }}
                >
                  Play on itch.io
                </Typography>
              ) : (
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    color: theme.palette.primary.main,
                  }}
                >
                  Coming Soon!
                </Typography>
              )}
            </>
          </Box>
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
        <a href={house_exterior_1} target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src={house_exterior_1}
            alt="House Exterior 1"
            sx={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </a>

        <a href={shop_interior_1} target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src={shop_interior_1}
            alt="Shop Interior 1"
            sx={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </a>

        <a href={shop_exterior} target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src={shop_exterior}
            alt="Shop Exterior"
            sx={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </a>

        <a href={shop_interior_2} target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src={shop_interior_2}
            alt="Shop Interior 2"
            sx={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </a>

        <a href={house_exterior_2} target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src={house_exterior_2}
            alt="House Exterior 2"
            sx={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </a>
      </Box>
    </>
  );
};
