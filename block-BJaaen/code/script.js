let playerScore = 0;
let computerScore = 0;

const playerScore_Span = document.querySelector(".player-score");
const computerScore_Span = document.querySelector(".computer-score");

const playerChoice_Span = document.querySelector(".player-choice");
const computerChoice_Span = document.querySelector(".computer-choice");


const result = document.querySelector(".result");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");



function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
};



function game(userChoice) {
    const computerChioce = getComputerChoice();
    computerChoice_Span.innerText = `Computer chose "${computerChioce}"`;  
    switch (userChoice + computerChioce) {
        case "papeRrok":
        case "rockScissors":
        case "scissorsPaper":
        result.innerText = "Hurrah! You Won!";
        result.style.color = "green";
        playerScore += 1;
        playerScore_Span.innerText = playerScore;
        break;

        case "rockPaper":
        case "paperScissors ":
        case "scissorsRock":
        result.innerText = "Hey! You Lost!";
        result.style.color = "red";
        computerScore += 1;
        computerScore_Span.innerText = computerScore;
        break;

        case "rockRock":
        case "paperPaper":
        case "scissorsScissors":
        result.innerText = "It's A tie!";
        result.style.color = "rgb(34,142,251)";
        break;

    }

}


function main() {

    rock.addEventListener("click", () => {
        playerChoice_Span.innerText = `You chose "Rock"`;
        game("rock");
    });

    paper.addEventListener("click", () => {
        playerChoice_Span.innerText = `You chose "Paper"`;
        game("paper");
    });
    scissors.addEventListener("click", () => {
        playerChoice_Span.innerText = `You chose "Scissors"`;
        game("scissors");
    });
    reset.addEventListener("click", () => {
        playerScore = 0;
        playerChoice_Span.innerText = "";
        playerScore_Span.innerText = playerScore;
        computerScore = 0;
        computerChoice_Span.innerText = "";
        computerScore_Span.innerText = computerScore;
        result.innerText = "";
    });

};
    main();