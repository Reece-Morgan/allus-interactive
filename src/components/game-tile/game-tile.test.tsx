import { render, screen } from "@testing-library/react";
import { GameTile } from "./game-tile";
import logo from "../../assets/logo.svg";

describe("Gametile", () => {
  it("renders as expected", () => {
    render(
      <GameTile
        img={logo}
        altText="Game Image"
        buttonText="Game Name"
        buttonLink="#external-link"
      />
    );
    expect(
      screen.getByRole("img", { name: /Game Image/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Game Name/i })
    ).toBeInTheDocument();
  });

  it("renders the image as expected", () => {
    render(
      <GameTile
        img={logo}
        altText="Game Image"
        buttonText="Game Name"
        buttonLink="#external-link"
      />
    );
    expect(
      screen.getByRole("img", { name: /Game Image/i })
    ).toBeInTheDocument();
  });

  it("renders the button as expected", () => {
    render(
      <GameTile
        img={logo}
        altText="Game Image"
        buttonText="Game Name"
        buttonLink="#external-link"
      />
    );
    expect(
      screen.getByRole("link", { name: /Game Name/i })
    ).toBeInTheDocument();
  });
});
