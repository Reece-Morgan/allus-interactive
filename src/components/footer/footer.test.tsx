import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer />);
    expect(
      screen.getByRole("img", { name: /Allus Interactive Logo/i })
    ).toBeInTheDocument();
  });

  it("renders the copyright text", () => {
    render(<Footer />);
    const paragraph = screen.getByText(
      "© Allus Interactive 2025. All rights reserved."
    );
    expect(paragraph).toBeInTheDocument();
  });
});
