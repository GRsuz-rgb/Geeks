function wordsInStars() {
    let userWords = prompt("Enter some words separated by commas: "); 
    
    let words = userWords.split(",").map(word => word.trim());

    let lenghtMax = Math.max(...words.map(word => word.length));
    
    let Border = "*".repeat(lenghtMax + 4);
    console.log(Border);

    for (let word of words) {
        let space = " ".repeat(lenghtMax - word.length);
        console.log(`* ${word}${space} *`);
    }

    console.log(Border);
}

wordsInStars();






















