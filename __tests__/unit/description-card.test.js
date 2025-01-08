import React from "react";
import { render, screen } from "@testing-library/react";
import DescriptionCard from "../../src/components/resume/DescriptionCard";

describe("DescriptionCard", () => {
  test("renders About DescriptionCard", () => {
    render(
      <DescriptionCard>
        <>
          <p>test card data header</p>
          <p>test card data description</p>
        </>
      </DescriptionCard>
    );
    const cardData = screen.getByText("test card data header");
    const cardDesc = screen.getByText("test card data description");
    expect(cardData).toBeTruthy();
    expect(cardDesc).toBeTruthy();
  });
});
