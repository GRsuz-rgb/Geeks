const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "purple", moons: 14 }
];

const section = document.querySelector(".listPlanets");
//2.For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
planets.forEach(planet => {
    const DivPlanet = document.createElement("div");
    DivPlanet.classList.add("planet");
//3.Each planet should have a different background color. 
    DivPlanet.style.backgroundColor = planet.color;
    DivPlanet.textContent = planet.name;
//4.Finally append each div to the <section> in the HTML 
    section.appendChild(DivPlanet);
    

});















