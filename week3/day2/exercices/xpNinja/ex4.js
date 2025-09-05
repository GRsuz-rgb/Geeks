//Exercise 4 : Biggest Number
function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0) return 0;

    let max = Number.NEGATIVE_INFINITY; //number lower than any other number
    for (let num of arrayNumber) {
        if (typeof(num) === "number" && num > max) {
            max = num;
        }
    }
    return max === Number.NEGATIVE_INFINITY ? 0 : max;
}


const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0

console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3));











