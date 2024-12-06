
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2: 
            return 'Scissors'
    }   
}

function getHumanChoice(event) {
        event.preventDefault();
        let choice = event.target.value;
        startGame(choice);
}

function startGame(choice) {
    let computerChoice = getComputerChoice();
    let result
    document.getElementById("computer-choice").innerHTML = computerChoice;

    if (choice == computerChoice) {
        result = "DRAW!";
    } else if (choice === "Rock") {
        if (computerChoice === "Paper") {
            result = "LOSS!";
        }
        if (computerChoice === "Scissors") {
            result = "WIN!"
        }
    } else if (choice === "Paper") {
        if (computerChoice === "Scissors") {
            result = "LOSS!"
        }
        if (computerChoice === "Rock") {
            result = "WIN!"
        }
    } else if (choice === "Scissors") {
        if (computerChoice === "Rock") {
            result = "LOSS!"
        }
        if (computerChoice === "Paper") {
            result = "WIN!"
        }
    } 

    document.getElementById("result").innerHTML = result;

}