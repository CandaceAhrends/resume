import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../../src/components/resume/About";

describe("About", () => {
  test("renders About section", () => {
    render(<About />);
    const aboutParagraph = screen.getByText("About");
    expect(aboutParagraph).toBeTruthy();
  });
  test("renders Education section", () => {
    render(<About />);
    const edParagraph = screen.getByText("Education");
    expect(edParagraph).toBeTruthy();
  });
});
