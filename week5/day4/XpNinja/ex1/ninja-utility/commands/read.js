import fs from 'fs';
export default function reading(file) {
    try {
        const content = fs.readFileSync(file, "utf-8");
        console.log("The content of a file : ", content);
    }
    catch(err){
        console.log("Error READING FILE : ", err);
    }
}