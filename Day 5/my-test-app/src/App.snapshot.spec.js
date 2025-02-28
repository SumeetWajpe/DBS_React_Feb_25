import { render, screen } from "@testing-library/react";
import App from "./App";

test("Link renders correctly", () => {
  const tree = render(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
