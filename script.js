
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    return  (num == 0) ? "Rock":
            (num == 1) ? "Paper":
            "Scissors";
}

function getHumanChoice(event) {
        event.preventDefault();
        startGame(event.target.value);
}

function startGame(choice) {
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