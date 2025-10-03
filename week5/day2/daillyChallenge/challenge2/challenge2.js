
const form = document.getElementById("form");
const results = document.getElementById("results");

async function getSunrise(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`
        );
        
        if (!response.ok) {
            throw new Error("API error: " + response.status);
        }
        const data = await response.json();
        
        return new Date(data.results.sunrise).toLocaleTimeString("en-US", { timeZone: "UTC" });    
    }
    catch (err) {
        console.log("Error : ", err);
        alert("Something went wrong.");
    }
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    results.innerHTML = "waiting...";

    
    const lat1 = document.getElementById("first-city-latitude").value;
    const lng1 = document.getElementById("first-city-longitude").value;
    const lat2 = document.getElementById("second-city-latitude").value;
    const lng2 = document.getElementById("second-city-longitude").value;

    
    try {
        const [sunrise1, sunrise2] = await Promise.all([
          getSunrise(lat1, lng1),
          getSunrise(lat2, lng2)
        ]);

        results.innerHTML = `
           First city Sunrise: ${sunrise1} <br>
           Second city Sunrise: ${sunrise2}
        `;
    } catch (error) {
        results.innerHTML = "Something went wrong!";
    }
    

});




/*
    `https://sunrise-sunset.org/api`
*/    