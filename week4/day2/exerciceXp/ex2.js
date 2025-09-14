//Exercise 2 : Colors #2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    let i = index + 1;
    let suffix = (i % 10 === 1 && i !== 11) ? ordinal[1] :
                 (i % 10 === 2 && i !== 12) ? ordinal[2] :
                 (i % 10 === 3 && i !== 13) ? ordinal[3] :
                 ordinal[0];
    
    console.log(`${i}${suffix} choice is ${color}.`);             
});






