import { readFileSync, writeFileSync } from "fs";

const data = readFileSync("source.txt", "utf8");
writeFileSync("destination.txt", data);

console.log("File copied successfully!");
