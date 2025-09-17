import { Hero } from "./hero";
import logo from "../../assets/logo/logo.svg";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const HeroWithCTA = () => (
  <Hero
    img={logo}
    altText="Allus Interactive Logo"
    buttonText="Click Here"
    buttonLink="#link"
    isButtonVisible={true}
  />
);

export const HeroWithoutCTA = () => (
  <Hero img={logo} altText="Allus Interactive Logo" />
);
