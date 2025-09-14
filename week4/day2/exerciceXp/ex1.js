//Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//1.
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

//2.
colors.includes("Violet") ? console.log("Yeah") : console.log("No");

