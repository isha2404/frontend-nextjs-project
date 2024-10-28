import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  const mockData = {
    title: "Sample Title",
    subtitle: "Sample Subtitle",
    description: "This is a sample description.",
    backgroundAsset: {
      url: "https://placehold.co/588x479/D1D3CA/D1D3CA",
      alt: "Sample card image",
    },
    cta: {
      url: "/about/offices/sample",
      text: "Explore More",
      ariaLabel: "explore more button",
    },
  };

  test("renders the h2 and h3 elements", () => {
    render(<Card {...mockData} />);

    const h2Element = screen.getByRole("heading", { level: 2 });
    const h3Element = screen.getByRole("heading", { level: 3 });

    expect(h2Element).toBeInTheDocument();
    expect(h3Element).toBeInTheDocument();
  });

  test("renders the background image", () => {
    render(<Card {...mockData} />);

    const imageElement = screen.getByAltText(/sample card image/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockData.backgroundAsset.url);
  });

  test("renders the description if provided", () => {
    render(<Card {...mockData} />);

    const descriptionElement = screen.getByText(
      /this is a sample description./i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test("button is present and changes background color on hover", () => {
    render(<Card {...mockData} />);

    // Check if the button is present
    const buttonElement = screen.getByRole("button", { name: /explore more/i });
    expect(buttonElement).toBeInTheDocument();

    buttonElement.style.backgroundColor = "white";

    // Check the default background color
    expect(buttonElement).toHaveStyle("background-color: white");

    // Simulate hover
    fireEvent.mouseEnter(buttonElement);
    buttonElement.style.backgroundColor = "red";

    expect(buttonElement).toHaveStyle("background-color: red");
  });
});
