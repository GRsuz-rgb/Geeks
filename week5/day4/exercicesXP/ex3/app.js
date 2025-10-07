import fileManager from "./fileManager.js";
const { readFile, writeFile } = fileManager;

const data = readFile("Hello World.txt");
console.log("File content:", data);

writeFile("Bye World.txt", "Writing to the file");
console.log("File updated successfully!");
