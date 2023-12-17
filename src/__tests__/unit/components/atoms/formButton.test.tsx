import { render } from "@testing-library/react";
import { FormButton } from "../../../../components";
import "@testing-library/jest-dom";

jest.mock("src/constants", () => ({
  ENVIRONMENT: "development",
}));

test("renders button with correct text", () => {
  const buttonText = "Submit";
  const { getByText } = render(<FormButton text={buttonText} />);

  expect(getByText(buttonText)).toBeInTheDocument();
});

afterAll(() => {
  delete process.env.VITE_APP_BASE_URL;
});
