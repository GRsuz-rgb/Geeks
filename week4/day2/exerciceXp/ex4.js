//Exercise 4: Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


//1. 
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

//2.
const fullStackResid = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResid);

//3.
const fSLastNames = users.filter(user => user.role === "Full Stack Resident").map(user => user.lastName);
console.log(fSLastNames);
