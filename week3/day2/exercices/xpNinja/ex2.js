//Exercise 2: Capitalized letters
function Capitalize(ch){
    let even = "";
    let odd = "";

    for (let i = 0; i < ch.length; i++){
        if (i % 2 == 0) {
            even += ch[i].toUpperCase();
            odd += ch[i];
        }
        else {
            even += ch[i];
            odd += ch[i].toUpperCase();
        }
    }
    return [even, odd];
}

console.log(Capitalize("abcdef"));















