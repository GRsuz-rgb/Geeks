import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readFile() {
  const filePath = path.join(__dirname, "file-data.txt");
  try {
    const content = fs.readFileSync(filePath, "utf8");
    console.log("File content:\n", content);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}
export default readFile;




