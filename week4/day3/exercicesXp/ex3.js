//Exercise 3: User & id
const users = { user1: 18273, user2: 92833, user3: 90315 };

//1.
const arrayObj = Object.entries(users);
console.log(arrayObj);

//2.
const idsX2 = arrayObj.map(([user, id]) => [user, id*2]);
console.log(idsX2);






