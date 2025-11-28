import getWeather from "./weather.js";
import readline from "readline";

export default function weatherDashboard() {
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout,
    });

    rl.question("Enter a city name : ", (city) => {
        getWeather(city);
        rl.close();
    });
}






