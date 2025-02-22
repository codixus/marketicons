# MarketIcons

A modern icon library that simplifies the use of stock market company logos in your React and React Native projects. Currently supporting Borsa Istanbul (BIST) companies, with plans to expand to other major stock markets.

## 📦 Available Packages

### Borsa Istanbul (BIST)

- `@marketicons/bist`: Core SVG icons for BIST companies
- `@marketicons/bist-react`: Ready-to-use React components
- `@marketicons/bist-react-native`: Ready-to-use React Native components

## 🚀 Getting Started

For React projects:

```bash
npm install @marketicons/bist-react
```

For React Native projects:

```bash
npm install @marketicons/bist-react-native react-native-svg
```

## 💡 Usage Example

```tsx
// React
import { BistIcon } from "@marketicons/bist-react";

function App() {
  return <BistIcon name="THYAO" size={32} />;
}

// React Native
import { BistIcon } from "@marketicons/bist-react-native";

function App() {
  return <BistIcon name="THYAO" size={32} />;
}
```

## 🌟 Features

- High-quality SVG icons for stock market companies
- TypeScript support
- Easy integration
- Regular updates

## 🗺️ Roadmap

- [x] Borsa Istanbul (BIST) support
- [ ] Crypto markets support
- [ ] NASDAQ support
- [ ] NYSE support
- [ ] London Stock Exchange support
- [ ] More exchanges coming soon...

## 📝 License

MIT © [Codixus](https://codixus.com)
