import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";

describe("RootLayout", () => {
  test("renders header and footer", () => {
    // Render the RootLayout component with a test child
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // Assert that the header (role 'banner') is in the document
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Valtech")).toBeInTheDocument();

    // Assert that the footer (role 'contentinfo') is in the document
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(
      screen.getByText("The experience innovation company")
    ).toBeInTheDocument();
  });
});
