import chalk from "chalk";

function displayMessage() {
  console.log(chalk.blue("This is a colorful message!"));
  console.log(chalk.red("Red alert!"));
  console.log(chalk.green("All good!"));
}

export default displayMessage;
