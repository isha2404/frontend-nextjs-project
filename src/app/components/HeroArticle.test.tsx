import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroArticle from "./HeroArticle";

describe("HeroArticle Component", () => {
  const mockData = {
    title: "Quisque ut gravida mauris, a consequat est",
    subtitle: "Suspendisse potenti",
    author: "Duis Viverra",
    publishingDate: "June 23, 1999",
    backgroundAsset: {
      url: "https://placehold.co/730x480/4C4C49/4C4C49",
      alt: "hero background picture",
    },
    sideAsset: {
      url: "https://placehold.co/466x480/D1D3CA/D1D3CA",
      alt: "hero side picture",
    },
  };

  test("renders the title and subtitle correctly", () => {
    render(<HeroArticle {...mockData} />);

    // Check if the title and subtitle are rendered correctly
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.subtitle)).toBeInTheDocument();
  });

  test("renders the author and publishing date correctly", () => {
    render(<HeroArticle {...mockData} />);

    // Check if the author and publishing date are rendered correctly
    expect(screen.getByText(`Author: ${mockData.author}`)).toBeInTheDocument();
    expect(screen.getByText(mockData.publishingDate)).toBeInTheDocument();
  });

  test("renders the background image and side image with correct attributes", () => {
    render(<HeroArticle {...mockData} />);

    // Check if the background image is rendered with correct src and alt
    const backgroundImage = screen.getByAltText(mockData.backgroundAsset.alt);
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute(
      "src",
      mockData.backgroundAsset.url
    );

    // Check if the side image is rendered with correct src and alt
    const sideImage = screen.getByAltText(mockData.sideAsset.alt);
    expect(sideImage).toBeInTheDocument();
    expect(sideImage).toHaveAttribute("src", mockData.sideAsset.url);
  });
});
