import { useState } from "react";
import "./carousel.css";
import { Box } from "@mui/material";

interface CarouselProps {
  items: Screenshot[];
}

export type Screenshot = {
  title: string;
  image: string;
};

export const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
  };

  const previous = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="carousel">
      <button
        className="carousel-button"
        onClick={previous}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-slide">
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-button"
        onClick={next}
        disabled={currentIndex === items.length - 1}
      >
        	&gt;
      </button>
    </div>
  );
};
