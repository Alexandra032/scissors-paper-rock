
function getComputerChoice() {
    let random = Math.random()

    if (random < 1/3) {
        return "rock";
    }
    else if (random < 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
alert(getComputerChoice());