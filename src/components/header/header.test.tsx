import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header />);
    const headerComponent = screen.getByTestId("header");
    expect(headerComponent).toBeInTheDocument();
  });

  it("renders the logo banner correctly", () => {
    render(<Header />);
    expect(
      screen.getByRole("img", { name: /Allus Interactive Banner/i })
    ).toBeInTheDocument();
  });

  it("renders the navigation links correctly", () => {
    render(<Header />);
    const navigationComponent = screen.getByTestId("navigation");
    expect(navigationComponent).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Games/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();
  });
});
