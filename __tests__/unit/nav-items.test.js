import React from "react";
import { render, screen } from "@testing-library/react";
import Items from "../../src/components/nav/Items";
import { BrowserRouter } from "react-router-dom";

describe("SideMenu", () => {
  test("renders 6 links", () => {
    render(
      <BrowserRouter>
        <Items open={true}></Items>
      </BrowserRouter>
    );
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(6);
  });
});
