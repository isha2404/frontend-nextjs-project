"use client";
import React from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./styles/carousel.module.scss";

interface CarouselItem {
  url: string;
  alt: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselItem}>
        <img
          src={items[currentIndex].url}
          alt={items[currentIndex].alt}
          width={1195}
          height={400}
          className={styles.image}
        />
        <div className={styles.description}>
          <p>{items[currentIndex].description}</p>
        </div>
      </div>
      <IconButton
        onClick={handlePrev}
        aria-label="Previous"
        className={styles.leftArrow}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        aria-label="Next"
        className={styles.rightArrow}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default Carousel;
