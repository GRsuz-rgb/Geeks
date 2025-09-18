//Exercise 3 : Async function

//1. Create an async function, that will await for the above GET request.
//The program shouldn’t contain any then() method

async function fetchStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Star Wars Starship:", data.result);
    } catch (error) {
        console.error("Error fetching Star Wars API:", error);
    }
}

fetchStarship();



