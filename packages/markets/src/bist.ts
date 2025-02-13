import { MarketInfo } from "./types";
import bistData from "./data/bist.json";

const BistData = bistData.reduce((acc, curr) => {
  acc[curr.code] = curr;
  return acc;
}, {} as Record<string, MarketInfo>);

export default BistData;
