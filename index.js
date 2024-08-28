import inquirer from "inquirer"; //importing inquirer
let myBalance = 10000; //current balance
let myPin = 4567;
//asking user to enter pin
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin",
        type: "number",
    }]);
// if the pin is correct then these lines of code will run
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!");
    //asking user what operation they want to perform
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }]);
    console.log(operationAns);
    //when withdraw option is selected
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is:" + myBalance);
        if (myBalance <= 0) {
            console.log("Error: Invalid withdrawal amount.");
        }
    }
    // if check balance is selected
    if (operationAns.operation === "check balance") {
        console.log("your current balance is :" + myBalance);
    }
}
else {
    console.log("Incorrect pin code !!");
}
