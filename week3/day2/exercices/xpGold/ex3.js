//Exercise 3 : SwapCase
function swap(ch){
    return ch.split("").map(
        char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        ).join("");  
}

console.log(swap('The Quick Brown Fox'));
console.log(swap('tHE qUICK bROWN fOX'));













