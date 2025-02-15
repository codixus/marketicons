import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BistIcon } from "../index";

describe("BistIcon", () => {
  it("renders without crashing", () => {
    render(<BistIcon name="THYAO" data-testid="bist-icon" />);
    const element = screen.getByTestId("bist-icon");
    expect(element).toBeInTheDocument();
  });

  it("applies custom size", () => {
    render(<BistIcon name="THYAO" size={48} data-testid="bist-icon" />);
    const element = screen.getByTestId("bist-icon");
    expect(element).toHaveAttribute("width", "48");
    expect(element).toHaveAttribute("height", "48");
  });

  it("applies custom className", () => {
    render(
      <BistIcon name="THYAO" className="custom-class" data-testid="bist-icon" />
    );
    const element = screen.getByTestId("bist-icon");
    expect(element).toHaveClass("custom-class");
  });

  it("handles invalid icon names", () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    render(<BistIcon name="INVALID" data-testid="bist-icon" />);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Icon "INVALID" not found in @marketicons/bist package'
    );
    consoleSpy.mockRestore();
  });

  it("renders SVG content correctly", () => {
    render(<BistIcon name="THYAO" data-testid="bist-icon" />);
    const element = screen.getByTestId("bist-icon");
    expect(element.tagName.toLowerCase()).toBe("svg");
    expect(element).toHaveAttribute("viewBox");
  });

  it("forwards additional props to SVG element", () => {
    render(
      <BistIcon
        name="THYAO"
        data-testid="bist-icon"
        aria-label="Turkish Airlines Logo"
      />
    );
    const element = screen.getByTestId("bist-icon");
    expect(element).toHaveAttribute("aria-label", "Turkish Airlines Logo");
  });
});
