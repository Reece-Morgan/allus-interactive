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
});
