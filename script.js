
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    return  (num == 0) ? "Rock":
            (num == 1) ? "Paper":
            "Scissors";
}

function gameLogic(choice) {
    let computerChoice = getComputerChoice();
    let result
    document.getElementById("computer-choice").innerHTML = computerChoice;

    switch (choice) {
        case "Rock":
            result = 
                (computerChoice === "Paper") ? "LOSS!" :
                (computerChoice === "Scissors") ? "WIN!":
                "DRAW!";
            break;
        case "Paper":
            result = 
                (computerChoice === "Scissors") ? "LOSS!" :
                (computerChoice === "Rock") ? "WIN!":
                "DRAW!";
            break;
        case "Scissors":
            result = 
                (computerChoice == "Rock") ? "LOSS!" :
                (computerChoice == "Paper") ? "WIN!":
                "DRAW!";
            break;
    } 

    document.getElementById("result").innerHTML = result;
}

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


// LISTENERS
rock.addEventListener('click', function(event) {
    event.preventDefault();
    gameLogic(event.target.value);
});

paper.addEventListener('click', function(event) {
    event.preventDefault();
    gameLogic(event.target.value);
});

scissors.addEventListener('click', function(event) {
    event.preventDefault();
    gameLogic(event.target.value);
});