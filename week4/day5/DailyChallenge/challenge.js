
function Anagram(str1, str2) {
    let normalize = (str) => str.toLowerCase().replace(/\s+/g, '').split('').sort().join(''); //replace(/\s+/g, '') : pour eviter les espaces du milieu

    return normalize(str1) === normalize(str2) ? true : false;
}




console.log(Anagram("Astronomer", "Moon starer"));   // true
console.log(Anagram("School master", "The classroom")); // true
console.log(Anagram("The Morse Code", "Here come dots"));   // true
console.log(Anagram("Test", "Taste"));   // false
