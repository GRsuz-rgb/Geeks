import axios from 'axios';
import chalk from 'chalk';
import 'dotenv/config';

const API_KEY = process.env.API_KEY;
export default async function getWeather(city) {
    try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(URL);
        const weather = response.data;

        console.log(chalk.blue(`Weather in ${weather.name}: `));
        console.log(`Temperature : ${chalk.yellow(weather.main.temp)} °C`);
        console.log(`Humidity    : ${chalk.cyan(weather.main.humidity)} %`);
        console.log(`Conditions  : ${chalk.green(weather.weather[0].description)}`);
    }
    catch (err) {
        console.error(chalk.red('Error defining BASE_URL:'), err.message);
    }
}




