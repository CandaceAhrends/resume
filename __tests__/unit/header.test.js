import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../src/components/Header";

describe("Header", () => {
  test("should show my name", () => {
    render(<Header></Header>);
    const h2Element = screen.getByRole("heading", { level: 2 });
    expect(h2Element.textContent).toBe("Candace Ahrends");
  });
});
