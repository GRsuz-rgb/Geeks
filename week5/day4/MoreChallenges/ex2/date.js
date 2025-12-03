export default function minutesLived(birthDate) {
    const birth = new Date(birthDate);
    const now = new Date();

    const diffInMs = Math.abs(now - birth);
    const minutesLived = Math.floor(diffInMs / (1000 * 60));

    return `You have lived approximately ${minutesLived} minutes.`;
}



//bonus :
//npm install prompt-sync
//const prompt = require("prompt-sync")();
//const birthdate = prompt("Enter your birthdate (YYYY-MM-DD): ");
