const fs = require("fs");
const path = require("path");

const svgDir = path.join(__dirname, "svg");
const outputFile = path.join(__dirname, "dist", "index.js");

const icons = {};
fs.readdirSync(svgDir).forEach((file) => {
  if (file.endsWith(".svg")) {
    const name = path.basename(file, ".svg");
    const content = fs.readFileSync(path.join(svgDir, file), "utf8");
    const viewBoxMatch = content.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 18 18";
    const cleanContent = content
      .replace(/<\?xml.*?\?>/, "")
      .replace(/<!DOCTYPE.*?>/, "")
      .replace(/<svg[^>]*>/, "")
      .replace(/<\/svg>/, "")
      .trim();

    icons[name] = {
      viewBox,
      content: cleanContent,
    };
  }
});

if (!fs.existsSync(path.join(__dirname, "dist"))) {
  fs.mkdirSync(path.join(__dirname, "dist"));
}

const jsContent = `module.exports = ${JSON.stringify(icons, null, 2)};
module.exports.default = module.exports;`;
fs.writeFileSync(outputFile, jsContent);

const esmContent = `export default ${JSON.stringify(icons, null, 2)};`;
fs.writeFileSync(path.join(__dirname, "dist", "index.esm.js"), esmContent);

const tsContent = `declare const icons: {
  [key: string]: {
    viewBox: string;
    content: string;
  };
};

export type BistCode = keyof typeof icons;
export default icons;`;

fs.writeFileSync(path.join(__dirname, "dist", "index.d.ts"), tsContent);
