import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter } from "react-router-dom";
import { FormHint } from "../../../../components";
import "@testing-library/jest-dom/";


jest.mock("src/constants", () => ({
  ENVIRONMENT: "development",
}));

describe("FormHint component", () => {
  it("renders correctly with provided text and link", () => {
    render(
      <ChakraProvider>
        <MemoryRouter>
          <FormHint
            text="This is a form hint."
            linkText="Click here"
            link="/some-link"
          />
        </MemoryRouter>
      </ChakraProvider>
    );

    expect(screen.getByText("This is a form hint.")).toBeInTheDocument();
    const linkElement = screen.getByText("Click here");
    expect(linkElement).toBeInTheDocument();
  });
});
