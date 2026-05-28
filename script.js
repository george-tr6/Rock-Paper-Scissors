console.log("Hello World");

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


function getHumanChoice() {
    
    const initialinput = prompt("Make your pick", "Rock, Paper, Scissors");
    const userinput = initialinput.toLocaleLowerCase();
    return userinput;
}

//Write the logic to get the human choice

//Declare the players score variables

//Write the logic to play a single round

//Write the logic to play the entire game
