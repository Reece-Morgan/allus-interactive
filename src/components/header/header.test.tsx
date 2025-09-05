import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header />);
    expect(
      screen.getByRole("img", { name: /Allus Interactive Banner/i })
    ).toBeInTheDocument();
  });
});
