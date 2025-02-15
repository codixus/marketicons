import React from "react";
import { SvgXml } from "react-native-svg";
import { ViewStyle } from "react-native";
import icons from "@marketicons/bist";

export interface BistIconProps {
  /**
   * BIST company code (e.g., "THYAO")
   */
  name: string;
  /**
   * Icon size in pixels
   * @default 24
   */
  size?: number;
  /**
   * Additional styles for the icon container
   */
  style?: ViewStyle;
  /**
   * Test ID for testing purposes
   */
  testID?: string;
}

/**
 * BistIcon component for displaying BIST company logos in React Native applications
 */
export function BistIcon({ name, size = 24, style, testID }: BistIconProps) {
  const icon = icons[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in @marketicons/bist package`);
    return null;
  }

  return (
    <SvgXml
      xml={icon.content}
      width={size}
      height={size}
      style={style}
      testID={testID}
    />
  );
}

export type { ViewStyle };
