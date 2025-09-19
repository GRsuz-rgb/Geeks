//Exercise 1 : Checking the BMI

let firstPerson = {
    fullName : "Dana Naguib",
    mass : 68,
    height : 1.65,
    massIndex : function () {
        return this.mass / this.height * this.height;
    }
}

let secondPerson = {
    fullName : "Karim Ayman",
    mass : 75,
    height : 1.8,
    massIndex : function () {
        return this.mass / this.height * this.height;
    }
}

function compareBMI(p1, p2) {
    
let m1 = p1.massIndex();
let m2 = p2.massIndex();

    if (m1 > m2) {
        console.log(`${p1.fullName} has the larger BMI: ${m1}`);
    }
    else if (m1 < m2) {
        console.log(`${p2.fullName} has the larger BMI: ${m2}`);
    }
    else {
        console.log(`The two ${p1.fullName} and ${p2.fullName}, have the same BMI: ${m1}`);
    }
}

compareBMI(firstPerson, secondPerson);




















