import { render } from "@testing-library/react";
import { ErrorMessage } from "../../../../components";
import "@testing-library/jest-dom/";


jest.mock("src/constants", () => ({
  ENVIRONMENT: "development",
}));

test("renders error message correctly", () => {
  const errorMessageText = "This is an error message";
  const { getByText } = render(<ErrorMessage text={errorMessageText} />);

  expect(getByText(errorMessageText)).toBeInTheDocument();
});

test("renders without error when text is undefined", () => {
  const { container } = render(<ErrorMessage text={undefined} />);

  expect(container).toBeDefined();
});
