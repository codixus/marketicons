import React from "react";
import icons from "@marketicons/bist";
import { getMarketInfo, Exchange } from "@marketicons/markets";

export interface BistIconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  name: string;
  size?: number | string;
  title?: string;
}

export function BistIcon({
  name,
  size = 24,
  title,
  ...props
}: BistIconProps): JSX.Element | null {
  const iconData = icons[name];
  if (!iconData) return null;

  const iconTitle = title || getMarketInfo(Exchange.BIST, name)?.name;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconData.viewBox}
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      aria-label={iconTitle}
      role="img"
      {...props}
      dangerouslySetInnerHTML={{ __html: iconData.content }}
    />
  );
}
