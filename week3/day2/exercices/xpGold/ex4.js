//Exercise 4 : Omnipresent value
function isOmnipresent(array, number){
    let result = true;
    array.forEach(subarray => {
        if (!subarray.includes(number)){
            result = false;
        }
    });
    return result;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); 
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); 













