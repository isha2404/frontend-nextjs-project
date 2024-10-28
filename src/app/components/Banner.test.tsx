// Banner.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

const mockData = {
  title: "Valtech",
  subtitle: "Banner subtitle",
  description: "Welcome to Valtech!",
  backgroundAsset: {
    url: "https://placehold.co/1196x480/F3F2EF/F3F2EF",
    alt: "banner background picture",
  },
  foregroundAsset: {
    url: "https://placehold.co/345x570/D1D3CA/D1D3CA",
    alt: "banner foreground picture",
  },
};

describe("Banner Component", () => {
  test("renders the background asset correctly", () => {
    render(<Banner {...mockData} />);
    const backgroundImage = screen.getByAltText("banner background picture");
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute(
      "src",
      mockData.backgroundAsset.url
    );
  });

  test("renders the foreground asset", () => {
    render(<Banner {...mockData} />);
    const foregroundImage = screen.getByAltText("banner foreground picture");
    expect(foregroundImage).toBeInTheDocument();
    expect(foregroundImage).toHaveAttribute(
      "src",
      mockData.foregroundAsset.url
    );
  });

  test("renders the title", () => {
    render(<Banner {...mockData} />);
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
  });

  test("renders the subtitle if provided", () => {
    render(<Banner {...mockData} />);
    expect(screen.getByText(mockData.subtitle as string)).toBeInTheDocument();
  });

  test("renders the description if provided", () => {
    render(<Banner {...mockData} />);
    expect(
      screen.getByText(mockData.description as string)
    ).toBeInTheDocument();
  });
});
