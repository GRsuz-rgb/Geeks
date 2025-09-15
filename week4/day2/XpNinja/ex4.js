//Exercise 4 : Array to Object
const letters = ['x', 'y', 'z', 'z'];

//1.
let ct = {};
for ( let i = 0; i < letters.length; i++){
    let l = letters[i];
    ct[l] ? ct[l] += 1 : ct[l] = 1;
}
console.log(ct);

//2.
const ctR = letters.reduce((acc, letter) => {
    acc[letter] = acc[letter] ? acc[letter]+1 : 1 ;
    return acc;
}, {});
console.log(ctR);



