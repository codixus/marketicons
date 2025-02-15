import React from "react";
import { render } from "@testing-library/react-native";
import { BistIcon } from "../index";

describe("BistIcon", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <BistIcon name="THYAO" testID="bist-icon" />
    );
    expect(getByTestId("bist-icon")).toBeTruthy();
  });

  it("applies custom size", () => {
    const { getByTestId } = render(
      <BistIcon name="THYAO" size={48} testID="bist-icon" />
    );
    const element = getByTestId("bist-icon");
    expect(element.props.width).toBe(48);
    expect(element.props.height).toBe(48);
  });

  it("handles invalid icon names", () => {
    const consoleSpy = jest.spyOn(console, "warn");
    render(<BistIcon name="INVALID" testID="bist-icon" />);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
