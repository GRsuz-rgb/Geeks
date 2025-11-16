//to install Faker : npm install @faker-js/faker
import { faker } from '@faker-js/faker';

const users = [];

function addFakeUser() {
    const user = {
        name : faker.person.fullName(),
        street : faker.location.streetAddress(),
        country : faker.location.country(),
    };
    users.push(user);
}

for (let i=0; i<6; i++) {
    addFakeUser();
}

console.log(users);


//Bonus : Find a node module that allows to prompt the user for his name, address street and country in order to add this information into the users array.
//use the module prompt-sync for CLI input : npm install prompt-sync
