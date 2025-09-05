import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";
import logo from "../../assets/logo/logo.svg";

describe("Hero", () => {
  it("renders as expected", () => {
    render(
      <Hero
        img={logo}
        altText="Logo Image"
        buttonText="Click Here"
        buttonLink="#link"
      />
    );
    expect(
      screen.getByRole("img", { name: /Logo Image/i })
    ).toBeInTheDocument();
  });

  it("renders the image as expected", () => {
    render(<Hero img={logo} altText="Logo Image" />);
    expect(
      screen.getByRole("img", { name: /Logo Image/i })
    ).toBeInTheDocument();
  });

  it("renders the button as expected", () => {
    render(
      <Hero
        img={logo}
        altText="Logo Image"
        buttonText="Click Here"
        buttonLink="#link"
        isButtonVisible={true}
      />
    );
    expect(
      screen.getByRole("link", { name: /Click Here/i })
    ).toBeInTheDocument();
  });

  it("does not render the button as expected", () => {
    render(<Hero img={logo} altText="Logo Image" />);
    expect(
      screen.queryByRole("link", { name: /Click Here/i })
    ).not.toBeInTheDocument();
  });

  it("has CTA text and link if button is visible", () => {
    render(
      <Hero
        img={logo}
        altText="Logo Image"
        buttonText="Learn More"
        buttonLink="#link"
        isButtonVisible={true}
      />
    );
    const button = screen.getByRole("link", { name: /Learn More/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "#link");
  });
});
