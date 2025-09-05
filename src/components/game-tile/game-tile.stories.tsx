import { GameTile } from "./game-tile";
import logo from "../../assets/placeholder.svg";

export default {
  title: "Components/GameTile",
  component: GameTile,
};

export const GameTileComponent = () => (
  <GameTile
    img={logo}
    altText="Game Screenshot"
    buttonText="Game Name"
    buttonLink="#external-link"
  />
);
GameTileComponent.storyName = "Game Tile";
