type SvgContent = {
  viewBox: string;
  content: string;
};

export type BistIcons = Record<string, SvgContent>;

declare const icons: BistIcons;
export = icons;
