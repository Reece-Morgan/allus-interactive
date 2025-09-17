import { Section } from "./section";
import placeholder from "../../assets/placeholder.svg";

export default {
  title: "Components/Section",
  component: Section,
};

const placeholderText = `
Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.

Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
`;

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
