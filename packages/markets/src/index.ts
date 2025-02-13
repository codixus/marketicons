import BistData from "./bist";
import { Exchange, MarketInfo } from "./types";

export const MarketData: Record<string, Record<Exchange, MarketInfo>> = {
  [Exchange.BIST]: BistData,
} as const;

export const getMarketInfo = (
  exchange: Exchange,
  code: string
): MarketInfo | undefined =>
  Reflect.get(MarketData[exchange], code) || undefined;

export const getAllMarkets = (exchange: Exchange): MarketInfo[] =>
  Object.values(MarketData[exchange]);

export { MarketInfo, Exchange };
