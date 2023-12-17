import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { SocialMediaLink } from "../../../../components";
import "@testing-library/jest-dom/";

jest.mock("src/constants", () => ({
  ENVIRONMENT: "development",
}));

describe("SocialMediaLink component", () => {
  it("renders correctly with provided props", () => {
    const mockIcon = <span data-testid="mock-icon">Icon</span>;
    const areaLabel = "Social Media Link";
    const href = "https://example.com";

    render(
      <ChakraProvider>
        <SocialMediaLink href={href} icon={mockIcon} areaLabel={areaLabel} />
      </ChakraProvider>
    );

    const linkElement = screen.getByRole("link");
    const iconElement = screen.getByTestId("mock-icon");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", href);
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent("Icon");

    const ariaLabel = screen.getByLabelText(areaLabel);
    expect(ariaLabel).toBeInTheDocument();
  });
});
