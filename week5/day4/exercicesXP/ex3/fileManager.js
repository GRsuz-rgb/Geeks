import { readFileSync, writeFileSync } from "fs";

function readFile(filePath) {
  return readFileSync(filePath, "utf8");
}

function writeFile(filePath, content) {
  writeFileSync(filePath, content, "utf8");
}

export default { readFile, writeFile };
