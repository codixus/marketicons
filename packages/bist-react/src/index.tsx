import React from "react";
import icons from "@marketicons/bist";
import { getMarketInfo, Exchange } from "@marketicons/markets";

export interface BistIconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  name: string;
  size?: number | string;
  title?: string;
}

export const BistIcon: React.FC<BistIconProps> = ({
  name,
  size = 24,
  title,
  ...props
}) => {
  const iconData = icons[name];
  if (!iconData) return null;

  const iconTitle = title || getMarketInfo(Exchange.BIST, name)?.name;

  return (
    <svg
      viewBox={iconData.viewBox}
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      {...props}
      dangerouslySetInnerHTML={{ __html: iconData.content }}
      aria-label={iconTitle}
      role="img"
    />
  );
};
