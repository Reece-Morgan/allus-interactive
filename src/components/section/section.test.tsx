import { render, screen } from "@testing-library/react";
import { Section } from "./section";
import placeholder from "../../assets/placeholder.svg";
import { placeholderText } from "../../data/constants";

describe("Section", () => {
  it("renders as expected", () => {
    render(
      <Section
        isReversed={false}
        img={placeholder}
        altText="Image Placeholder"
        text={placeholderText}
        title="Section Title"
      />
    );
    const sectionComponent = screen.getByTestId("section");
    expect(sectionComponent).toBeInTheDocument();
  });

  it("renders the image as expected", () => {
    render(
      <Section
        isReversed={false}
        img={placeholder}
        altText="Image Placeholder"
        text={placeholderText}
        title="Section Title"
      />
    );
    expect(
      screen.getByRole("img", { name: /Image Placeholder/i })
    ).toBeInTheDocument();
  });

  it("renders the title and text as expected", () => {
    render(
      <Section
        isReversed={false}
        img={placeholder}
        altText="Image Placeholder"
        text={placeholderText}
        title="Section Title"
      />
    );
    const sectionText = screen.getByTestId("section-text");
    const sectionTitle = screen.getByTestId("section-title");
    expect(sectionText).toBeInTheDocument();
    expect(sectionTitle).toBeInTheDocument();
  });
});
