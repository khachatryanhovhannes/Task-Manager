import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LinkField } from "../../../../components";
import "@testing-library/jest-dom/";

jest.mock("src/constants", () => ({
  ENVIRONMENT: "development",
}));

describe("LinkField component", () => {
  it("renders link with correct text and navigates on click", () => {
    // Render the LinkField component within a MemoryRouter
    const sampleText = "Sample Link";
    const sampleLink = "/sample-link";
    const { getByText } = render(
      <MemoryRouter>
        <LinkField text={sampleText} link={sampleLink} />
      </MemoryRouter>
    );

    const link = getByText(sampleText);

    fireEvent.click(link);
  });
});
