/** @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { App, lightTheme, darkTheme } from "./App";

/**
 * Verify something should render
 */
test("App should render", () => {
  render(<App />);

  expect(screen.getByText("Welcome, party people!")).toBeInTheDocument();
});

test("Buttons should render", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  expect(
    screen.getByRole("button", { name: /Current theme:/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /hidden content/i })
  ).toBeInTheDocument();
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */

test("theme button should update button text", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Current theme:/i });
  const initialText = button.textContent;
  fireEvent.click(button);
  expect(button.textContent == initialText).toBe(false);
});

test("hidden content button should update button text", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /hidden content/i });
  const initialText = button.textContent;
  fireEvent.click(button);
  expect(button.textContent == initialText).toBe(false);
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test("theme button should toggle styles", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);

  const button = screen.getByRole("button", { name: /Current theme:/i });

  expect(button.textContent).toBe("Current theme: light");
  expect(document.body).toHaveStyle(lightTheme);
  fireEvent.click(button);
  expect(button.textContent).toBe("Current theme: dark");
  expect(document.body).toHaveStyle(darkTheme);
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test("hidden button should toggle hidden content", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  expect(
    screen.queryByText("this content is hidden by default")
  ).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /hidden content/i }));
  expect(
    screen.getByText("this content is hidden by default")
  ).toBeInTheDocument();
});

/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
