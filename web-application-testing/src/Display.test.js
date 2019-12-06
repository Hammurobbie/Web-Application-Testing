import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("renders lamda stadium text", () => {
  const { getByText } = render(<Display />);
  const textElement = getByText(/lambda stadium/i);
  expect(textElement).toBeInTheDocument();
});

test("renders foul button text", () => {
  const buttonElement = getByText(/foul/i);
  expect(buttonElement).toBeInTheDocument();
});
