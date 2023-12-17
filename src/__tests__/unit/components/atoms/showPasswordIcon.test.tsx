import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ShowPasswordIcon } from "../../../../components";

jest.mock("src/constants", () => ({
  ENVIRONMENT: "development",
}));

describe("ShowPasswordIcon component", () => {
  it("toggles password visibility when clicked", async () => {
    const mockSetIsShowPassword = jest.fn();
    const isShowPassword = true;

    render(
      <ShowPasswordIcon
        isShowPassword={isShowPassword}
        setIsShowPassword={mockSetIsShowPassword}
      />
    );
    const icon = await screen.findByRole("button");

    expect(icon).toBeInTheDocument();
    
    fireEvent.click(icon);

    expect(mockSetIsShowPassword).toHaveBeenCalledWith(!isShowPassword);
  });
});
