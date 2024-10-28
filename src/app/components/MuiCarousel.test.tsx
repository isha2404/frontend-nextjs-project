import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./MuiCarousel";

describe("Carousel Component", () => {
  const mockData = [
    {
      url: "https://placehold.co/1195x400/D1D3CA/D1D3CA",
      alt: "carousel first item",
      description:
        "Aliquam malesuada velit nisl, quis porta massa bibendum ut.",
    },
    {
      url: "https://placehold.co/1195x400/4C4C49/4C4C49",
      alt: "carousel second item",
      description:
        "Pellentesque interdum purus felis, sit amet ullamcorper dolor.",
    },
    {
      url: "https://placehold.co/1195x400/D1D3CA/D1D3CA",
      alt: "carousel third item",
      description: "In non ullamcorper ex. Proin rutrum placerat tortor.",
    },
  ];

  test("renders the first carousel item by default", () => {
    render(<Carousel items={mockData} />);

    // Check that the first item is rendered rendered
    expect(screen.getByAltText("carousel first item")).toBeInTheDocument();
  });

  test("navigates to the next item when 'Next' button is clicked", () => {
    render(<Carousel items={mockData} />);

    // Click the "Next" button
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    // Check that the second item is rendered
    expect(screen.getByAltText("carousel second item")).toBeInTheDocument();
  });

  test("navigates to the previous item when 'Previous' button is clicked", () => {
    render(<Carousel items={mockData} />);

    // Click the "Previous" button (should go to the last item since we are at the first item)
    const prevButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(prevButton);

    // Check that the carousel item is rendered
    expect(screen.getByAltText("carousel third item")).toBeInTheDocument();
  });
});
