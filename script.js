console.log("Hello World");

//Declare the players score variables

let humanScore = 0;
let computerScore = 0;

//Write the logic to get the computer choice

function getComputerChoice() {

    const randomnumber = Math.random() * 10;
    const computerchoice = Number(randomnumber);
    let label;

    if (computerchoice <= 3.333) {
        // console.log(computerchoice);
        label = "Rock";

    } else if (computerchoice > 3.333 && computerchoice <= 6.667) {
        // console.log(computerchoice);
        label = "Paper";

    } else {
        // console.log(computerchoice);
        label = "Scissors";
    };

    const finalchoice = label.toLocaleLowerCase();
    return finalchoice;
}

//Write the logic to get the human choice
function getHumanChoice() {
    
    const initialinput = prompt("Make your pick", "Rock, Paper, Scissors");
    const userinput = initialinput.toLocaleLowerCase();
    return userinput;
}


//Write the logic to play a single round

function playRound(humanChoice, computerChoice) {

    let result;

    if (humanChoice === "rock" && computerChoice === "rock") {
        result = "tie"
        console.log(result);
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        result = "tie"
        console.log(result);
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        result = "tie"
        console.log(result);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result = "You win! Rock beats Scissors"
        console.log(result);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result = "You win! Paper beats Rock"
        console.log(result);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = "You win! Scissors beats Paper"
        console.log(result);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result = "Sorry, you did not win! Paper beats Rock"
        console.log(result);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result = "Sorry, you did not win! Scissors beats Paper"
        console.log(result);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result = "Sorry, you did not win! Rock beats Scissors"
        console.log(result);
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//Write the logic to play the entire game
