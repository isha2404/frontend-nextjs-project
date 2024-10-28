import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Description from "./Description";

describe("Description Component", () => {
  const mockData = {
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    highlight: true,
  };

  test("renders the paragraph correctly", () => {
    render(<Description {...mockData} />);

    // Check if the paragraph is rendered with the correct text
    const paragraphElement = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  test("applies the highlight CSS class when highlight is true", () => {
    render(<Description {...mockData} />);

    // Check if the description div has the highlight class
    const descriptionElement = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ).parentElement;
    expect(descriptionElement).toHaveClass("highlight");
  });

  test("does not apply the highlight CSS class when highlight is false", () => {
    render(<Description text={mockData.text} highlight={false} />);

    // Check if the description div does not have the highlight class
    const descriptionElement = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ).parentElement;
    expect(descriptionElement).not.toHaveClass("highlight");
  });
});
