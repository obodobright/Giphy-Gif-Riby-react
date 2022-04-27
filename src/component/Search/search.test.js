import React from "react";
import SearchField from "./index";
import { fireEvent, cleanup } from "@testing-library/react";
import { render, screen } from "../../test-utils";

afterEach(cleanup);

it("if button renders correctly", () => {
  render(<SearchField />);
  expect(screen.getAllByTestId("search-btn")).toBeTruthy();
  expect(screen.getAllByPlaceholderText("search your gif")).toBeTruthy();
});

describe("input value", () => {
  it("update input onchange", () => {
    render(<SearchField />);
    const searchInput = screen.getByPlaceholderText("search your gif");
    fireEvent.change(searchInput, { target: { value: "text" } });
    fireEvent.change(searchInput, { target: { value: "text" } });

    expect(searchInput.value).toBe("text");
  });
});
afterEach(() => {
  console.log("aftereach");
});

describe("search button", () => {
  describe("with empty input fields", () => {
    const requestSearch = jest.fn();
    render(<SearchField requestSearch={requestSearch} />);

    fireEvent.click(screen.getByTestId("search-btn"));
    expect(requestSearch).not.toHaveBeenCalled();
  });
  //
});

// describe("with input field", () => {
//   const searchFunction = jest.fn();
//   render(<SearchField searchFunction={searchFunction} />);
//   const searchInput = screen.getByTestId("input-field");
//   fireEvent.change(searchInput, { target: { value: "text" } });

//   fireEvent.click(screen.queryByTestId("search-btn"));

//   expect(searchFunction).toHaveBeenCalled();
// });
