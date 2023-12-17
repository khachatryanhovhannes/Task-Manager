import { render } from "@testing-library/react";
import { Loader } from "../../../../components";
import "@testing-library/jest-dom/";

jest.mock("src/constants", () => ({
    ENVIRONMENT: "development",
  }));

describe("Loader component", () => {
  it("renders loader with correct properties", () => {
    const { getByLabelText } = render(<Loader />);

    const loader = getByLabelText("oval-loading");
    
    expect(loader).toBeInTheDocument();
    
  });
});
