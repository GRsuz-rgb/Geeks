//Exercise 5: Unique Elements
function uniqueElements(array) {
    let newList = [];
    for (let element of array) {
        if (!newList.includes(element)) {
            newList.push(element);
        }
    }
    return newList;
}

console.log("List = [1,2,3,3,3,3,4,5]", " newList =", uniqueElements([1,2,3,3,3,3,4,5]));











