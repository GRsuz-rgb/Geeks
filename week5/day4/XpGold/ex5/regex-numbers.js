function returnNumbers(str) {
    const numbers = str.match(/\d+/g); //find all occurrences of one or more digits within the string.
    return numbers ? numbers.join('') : '';
}

console.log(returnNumbers("abc123def456"));
//output : 123456

