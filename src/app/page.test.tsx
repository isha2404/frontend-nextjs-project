import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

jest.mock("./components/CardGrid", () => {
  return (props: { children?: React.ReactNode }) => (
    <div data-testid="card-grid">{props.children}</div>
  );
});
jest.mock("./components/Banner", () => {
  return (props: { children?: React.ReactNode }) => (
    <div data-testid="banner">{props.children}</div>
  );
});

// Mock data
jest.mock("../data/index.json", () => ({
  title: "Valtech Challenge",
  keywords: "valtech,tech,frontend",
  pageType: "HOMEPAGE",
  content: [
    {
      type: "HERO",
      title: "Valtech",
      subtitle: "Banner subtitle",
      description: "Welcome to Valtech!",
      backgroundAsset: {
        url: "https://placehold.co/1196x480/F3F2EF/F3F2EF",
        alt: "banner background picture",
        type: "image",
      },
      foregroundAsset: {
        url: "https://placehold.co/345x570/D1D3CA/D1D3CA",
        alt: "banner foreground picture",
        type: "image",
      },
    },
    {
      type: "CARD_GRID",
      title: "Valtech Offices",
      cards: [
        {
          type: "CARD",
          title: "Venice",
          subtitle: "Italy",
          description: "Some description",
          backgroundAsset: {
            url: "https://placehold.co/588x479/D1D3CA/D1D3CA",
            alt: "Venice card image",
            type: "image",
          },
          cta: {
            url: "/article",
            text: "Explore More",
            ariaLabel: "explore more button",
            target: "_blank",
          },
        },
      ],
    },
  ],
}));

describe("HomePage", () => {
  test("renders Banner component when bannerData is present", () => {
    render(<HomePage />);

    // Assert that the Banner component is in the document
    expect(screen.getByTestId("banner")).toBeInTheDocument();
  });

  test("renders CardGrid component when cardGridData is present", () => {
    render(<HomePage />);

    // Assert that the CardGrid component is in the document
    expect(screen.getByTestId("card-grid")).toBeInTheDocument();
  });
});
