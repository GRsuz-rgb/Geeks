//Exercise 2: Display Student Info
//1.
function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

