#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function wellcome() {
    let tittle = chalkAnimation.pulse("Develp by Hassan Sheikh \n start your currency Converter");
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
    tittle.stop();
}
await wellcome();
async function currencyConverter() {
    let convertion = {
        PKR: {
            USD: 0.0036,
            GBP: 0.0028,
            PKR: 1,
        },
        GBP: {
            USD: 1.27,
            GBP: 1,
            PKR: 354.9,
        },
        USD: {
            USD: 1,
            GBP: 0.79,
            PKR: 279.5,
        },
    };
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your currency",
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your convertion currency",
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your convertion amount",
        },
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = convertion[from][to] * amount;
        console.log(chalk.greenBright.underline.bold.italic(`Your convertion from ${from} to ${to} is ${result}`));
    }
    else {
        console.log(chalk.red.underline("invalid inputs"));
    }
}
async function startAgain() {
    do {
        await currencyConverter();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to try again? Press(y/n)",
        });
    } while (again.restart === "y" ||
        again.restart === "Y" ||
        again.restart === "yes" ||
        again.restart === "YES");
}
await startAgain();
