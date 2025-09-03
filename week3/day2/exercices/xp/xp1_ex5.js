//1. Retrieve the div and console.log it
const div = document.getElementById("container");
console.log(div);
//2.Change the name “Pete” to “Richard”.
const firstList = document.querySelector(".list");
firstList.children[1].textContent = "Richard";
//3.Delete the second <li> of the second <ul>.
const second = document.querySelectorAll(".list")[1];
second.removeChild(second.children[1]);
//4.Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
document.querySelectorAll(".list").forEach(ul => {
    ul.firstElementChild.textContent = "nour"; 
})
//3. 1.Add a class called student_list to both of the <ul>'s.
document.querySelectorAll(".list").forEach(ul => {
    ul.classList.add("student_list");
});
//3. 2.Add the classes university and attendance to the first <ul>.
firstList.classList.add("university", "attendance");

//4. 1. Add a “light blue” background color and some padding to the <div>.
div.style.backgroundColor = "light blue";
div.style.padding = "20px";
//4. 2.Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
const allLists = document.querySelectorAll("li");
allLists.forEach(li => {
    if(li.textContent === "Dan") {
        li.style.display = "none";
    }
});
//4. 3.Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
allLists.forEach(li => {
    if(li.textContent === "Richard") {
        li.style.border = "2px solid yellow";
    }
})
//4. 4.Change the font size of the whole body
document.body.style.fontSize = "30px";

//5. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (div.style.backgroundColor === "lightBlue") {
    const users = document.querySelectorAll(".list:first-of-type li"); //select elements of the first list
    const x = users[0].textContent;
    const y = users[1].textContent;
    alert(`Hello ${x} and ${y}`);
}







