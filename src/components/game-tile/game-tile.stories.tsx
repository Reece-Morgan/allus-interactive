import { GameTile } from "./game-tile";
import placeholder from "../../assets/placeholder.svg";

export default {
  title: "Components/GameTile",
  component: GameTile,
};

export const GameTileComponent = () => (
  <GameTile
    img={placeholder}
    altText="Game Screenshot"
    buttonText="Game Name"
    buttonLink="#external-link"
  />
);
GameTileComponent.storyName = "Game Tile";
