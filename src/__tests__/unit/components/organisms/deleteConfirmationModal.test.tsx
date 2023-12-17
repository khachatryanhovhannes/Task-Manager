import { render, screen, fireEvent } from "@testing-library/react";
import { DeleteConfirmationModal } from "../../../../components";
import "@testing-library/jest-dom/";

jest.mock("src/constants", () => ({
  ENVIRONMENT: "development",
}));

describe("DeleteConfirmationModal", () => {
  test("renders with correct content", () => {
    const isOpen = true;
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    render(
      <DeleteConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    );

    expect(screen.getByText("Delete Confirmation")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Are you sure you want to delete this task? This action cannot be undone."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument();
  });

  test("calls onClose when 'Cancel' button is clicked", () => {
    const isOpen = true;
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    render(
      <DeleteConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));

    expect(onClose).toHaveBeenCalled();
  });

  test("calls onConfirm when 'Delete' button is clicked", () => {
    const isOpen = true;
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    render(
      <DeleteConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Delete" }));

    expect(onConfirm).toHaveBeenCalled();
  });
});
