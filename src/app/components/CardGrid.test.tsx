import React from "react";
import { render, screen } from "@testing-library/react";
import CardGrid from "./CardGrid";

const mockData = {
  title: "Valtech Offices",
  cards: [
    {
      title: "Card 1",
      subtitle: "Subtitle 1",
      description: "Description 1",
      backgroundAsset: {
        url: "https://placehold.co/300x200",
        alt: "Card 1 background",
      },
    },
  ],
};

describe("CardGrid Component", () => {
  test("renders the CardGrid title", () => {
    // Render the CardGrid component with mock data
    render(<CardGrid title={mockData.title} cards={mockData.cards} />);

    // Assert that the title is rendered
    const heading = screen.getByRole("heading", { name: /valtech offices/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the cards", () => {
    // Render the CardGrid component with mock data
    render(<CardGrid title={mockData.title} cards={mockData.cards} />);

    // Assert that at least one card is rendered
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards.length).toBeGreaterThan(0);
  });
});
