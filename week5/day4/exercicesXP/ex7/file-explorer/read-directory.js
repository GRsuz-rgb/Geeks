import { readdirSync } from "fs";

const files = readdirSync(".");
console.log("Files in directory:");
files.forEach(f => console.log("-", f));
