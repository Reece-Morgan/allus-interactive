import { Section } from "./section";
import placeholder from "../../assets/placeholder.svg";
import { placeholderText } from "../../data/constants";

export default {
  title: "Components/Section",
  component: Section,
};

export const SectionComponent = () => (
  <Section
    isReversed={false}
    img={placeholder}
    altText="Image Placeholder"
    text={placeholderText}
    title="Section Title"
  />
);
export const SectionReverseComponent = () => (
  <Section
    isReversed={true}
    img={placeholder}
    altText="Image Placeholder"
    text={placeholderText}
    title="Section Title"
  />
);
SectionComponent.storyName = "Section";
SectionReverseComponent.storyName = "Section Reversed";
