//Exercise 6 : Change the navbar
//2. 
const div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");
//3. 1.First, create a new <li> tag (use the createElement method).
const newListe = document.createElement("li");
//3.2.Create a new text node with “Logout” as its specified text.
const newNode = document.createTextNode("Logout"); 
//3.3.Append the text node to the newly created list node (<li>).
newListe.appendChild(newNode);
//3.4.append this updated list node to the unordered list (<ul>), using the appendChild method.
const ul = div.querySelector("ul");
ul.appendChild(newListe);
//4.
const first = ul.firstElementChild;
const last = ul.lastElementChild;

console.log("first link text : ", first.textContent);
console.log("last link text : ", last.textContent);










