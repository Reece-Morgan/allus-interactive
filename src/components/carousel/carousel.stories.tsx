import { Carousel, type Screenshot } from "./carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

const exampleImages: Screenshot[] = [
  {
    title: "Slide 1",
    image: "../../assets/placeholder.svg",
  },
  {
    title: "Slide 2",
    image: "../../assets/placeholder.svg",
  },
  {
    title: "Slide 3",
    image: "../../assets/placeholder.svg",
  },
];

export const CarouselComponent = () => {
  <Carousel items={exampleImages} />;
};

CarouselComponent.storyName = "Carousel";
