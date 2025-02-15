// build-icons.js
const fs = require("fs");
const path = require("path");

const svgDir = path.join(__dirname, "svg");

const outputDir = path.join(__dirname, "dist");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const icons = {};

fs.readdirSync(svgDir).forEach((file) => {
  if (file.endsWith(".svg")) {
    const name = path.basename(file, ".svg");
    const filePath = path.join(svgDir, file);
    const content = fs.readFileSync(filePath, "utf8");

    let viewBox;
    const viewBoxMatch = content.match(/viewBox="([^"]+)"/i);
    if (viewBoxMatch) {
      viewBox = viewBoxMatch[1];
    } else {
      const widthMatch = content.match(/width="([^"]+)"/i);
      const heightMatch = content.match(/height="([^"]+)"/i);
      if (widthMatch && heightMatch) {
        viewBox = `0 0 ${widthMatch[1]} ${heightMatch[1]}`;
      } else {
        viewBox = "0 0 24 24";
      }
    }

    const innerContent = content
      .replace(/<\?xml.*?\?>/g, "")
      .replace(/<!DOCTYPE.*?>/g, "")
      .replace(/<svg[^>]*>/i, "")
      .replace(/<\/svg>/i, "")
      .trim();

    icons[name] = {
      viewBox,
      content: innerContent,
    };
  }
});

const jsContent = `module.exports = ${JSON.stringify(icons, null, 2)};
module.exports.default = module.exports;`;
fs.writeFileSync(path.join(outputDir, "index.js"), jsContent);

const esmContent = `export default ${JSON.stringify(icons, null, 2)};`;
fs.writeFileSync(path.join(outputDir, "index.esm.js"), esmContent);

const tsContent = `declare const icons: {
  [key: string]: {
    viewBox: string;
    content: string;
  };
};

export type IconName = keyof typeof icons;
export default icons;`;
fs.writeFileSync(path.join(outputDir, "index.d.ts"), tsContent);

console.log("Build succeded for bist icons");
