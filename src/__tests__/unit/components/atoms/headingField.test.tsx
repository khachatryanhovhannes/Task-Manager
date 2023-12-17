import { render } from "@testing-library/react";
import { HeadingField } from "../../../../components";
import "@testing-library/jest-dom/";

jest.mock("src/constants", () => ({
  ENVIRONMENT: "development",
}));

describe("HeadingField component", () => {
  it("renders heading with correct text", () => {
    const sampleText = "Sample Heading";
    const { getByText } = render(<HeadingField text={sampleText} />);

    const heading = getByText(sampleText);

    expect(heading).toBeInTheDocument();
  });
});
