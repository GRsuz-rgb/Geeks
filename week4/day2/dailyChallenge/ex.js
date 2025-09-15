const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];


//1.
const usernames = [];
gameInfo.forEach(gamer => {
    usernames.push(gamer.username + "!");
});
console.log(usernames);

//2.
const winners = [];
gameInfo.filter(gamer => gamer.score > 5 ).forEach(gamer => {
    winners.push(gamer.username);
});
console.log(winners);

//3.
let scoreTotal = 0;
gameInfo.forEach(gamer => {
    scoreTotal += gamer.score
}); 
console.log("total score of the users : ", scoreTotal);

