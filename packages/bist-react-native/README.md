# @marketicons/bist-react-native

BIST (Borsa Istanbul) company logos as React Native components.

## Installation

```bash
# npm
npm install @marketicons/bist-react-native react-native-svg

# yarn
yarn add @marketicons/bist-react-native react-native-svg

# pnpm
pnpm add @marketicons/bist-react-native react-native-svg
```

> Note: This package requires `react-native-svg` as a peer dependency.

For iOS, you need to install pods:

```bash
cd ios && pod install && cd ..
```

## Usage

```tsx
import { BistIcon } from "@marketicons/bist-react-native";

function App() {
  return (
    <View>
      <BistIcon name="THYAO" size={32} />
      <BistIcon name="GARAN" size={48} style={{ marginBottom: 8 }} />
    </View>
  );
}
```

## Props

| Prop  | Type      | Default | Description                              |
| ----- | --------- | ------- | ---------------------------------------- |
| name  | string    | -       | BIST company code (e.g., "THYAO")        |
| size  | number    | 24      | Icon size in pixels                      |
| style | ViewStyle | -       | Additional styles for the icon container |

## License

MIT © [Codixus](https://codixus.com)
