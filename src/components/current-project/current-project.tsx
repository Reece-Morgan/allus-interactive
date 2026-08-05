import { Box, Link, Typography } from "@mui/material";
import theme from "../../theme";
import logo from "../../assets/current-project/logo.png";
import { Carousel } from "@components/carousel/carousel";
import { carouselImages } from "../../data/constants";

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
        <a href={logo} target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src={logo}
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
              data-testid="current-project-title"
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
          < br/>
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
            Find out more about the Indie Arcade Moray Gaming Expo&nbsp;
            <Link href="https://www.indiegamesquad.co.uk/iam-gaming-expo/" target="_blank" rel="noopener noreferrer">
              here!
            </Link>
          </Typography>
        </div>
      </Box>
      <Carousel items={carouselImages} />
    </>
  );
};
