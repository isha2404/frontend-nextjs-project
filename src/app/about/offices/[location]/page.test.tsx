// DetailsPage.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import DetailsPage from "./page";

// Mock components
jest.mock("../../../components/HeroArticle", () => (props: any) => (
  <div data-testid="hero-article">{props.title}</div>
));
jest.mock("../../../components/Description", () => (props: any) => (
  <div data-testid="description">{props.text}</div>
));
jest.mock("../../../components/MuiCarousel", () => (props: any) => (
  <div data-testid="carousel">{`Carousel with ${props.items.length} items`}</div>
));

describe("DetailsPage", () => {
  test("renders HeroArticle component when content type is HERO_ARTICLE", () => {
    // Mock data includes a HERO_ARTICLE section
    render(<DetailsPage />);

    // Check if HeroArticle component is rendered
    expect(screen.getByTestId("hero-article")).toBeInTheDocument();
  });

  test("renders Description component when content type is PARAGRAPH", () => {
    // Mock data includes PARAGRAPH sections
    render(<DetailsPage />);

    // Check if the Description components are rendered
    const paragraphs = screen.getAllByTestId("description");
  });

  test("renders MuiCarousel component when content type is CAROUSEL", () => {
    // Mock data includes a CAROUSEL section
    render(<DetailsPage />);

    // Check if MuiCarousel component is rendered
    expect(screen.getByTestId("carousel")).toBeInTheDocument();
  });
});
