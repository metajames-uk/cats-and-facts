import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("renders h1 title 'Facts of cats'", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Facts of cats/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders button that generates a fact", () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Give me fact/i);
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
