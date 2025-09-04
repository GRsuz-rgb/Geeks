//Exercise 2 : Abbrev_name
function abbrevName(name){
    let ns = name.split(' ');
    return ns.length > 1 ? ns[0]+' '+ns[1][0].toUpperCase()+'.' : name;
}

console.log(abbrevName("Robin Singh"));
