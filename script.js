console.log("Hello World");

//Write the logic to get the computer choice

function getComputerChoice() {

    let randomnumber = Math.random() * 10;
    let computerchoice = Number(randomnumber);
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

    finalchoice = label.toLocaleLowerCase();
    return finalchoice;
}


//Write the logic to get the human choice

//Declare the players score variables

//Write the logic to play a single round

//Write the logic to play the entire game
