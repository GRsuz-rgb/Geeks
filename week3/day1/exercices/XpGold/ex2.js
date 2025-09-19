//Exercise 2 : Attendance

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let studentName = prompt("What's your name?");

if (studentName in guestList) {
    console.log(`HI! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
}
else {
    console.log("Hi! I'm a guest.");
}

