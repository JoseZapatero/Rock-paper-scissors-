let userScore = 0;
let computerScore = 0;
let drawScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const drawScore_span = document.getElementById("draw-score");
const scoreBoard = document.querySelector(".score");
const outcome = document.querySelector(".outcome > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    outcome.innerHTML = userChoice + "  beats  " + computerChoice + ".  You Win  ";
    outcome.style.color = '#90F73A'

}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    outcome.innerHTML = computerChoice + "  beats  " + userChoice + ".  You Lose  ";
    outcome.style.color = '#E44926'
}

function draw(userChoice, computerChoice) {
    drawScore++;
    drawScore_span.innerHTML = drawScore;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    outcome.innerHTML = computerChoice + "  equals  " + userChoice + ".  Tie  ";
    outcome.style.color = '#E0E31A'
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log()
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("rock"));
    
    paper_div.addEventListener("click", () => game("paper"));

    scissors_div.addEventListener("click", () => game("scissors"));
}

main();