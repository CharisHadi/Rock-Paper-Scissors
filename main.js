function playRound(playerChoice, computerChoice){

    if(playerChoice == computerChoice){
    // tie = 0
        return (0);
    // wins = 1
    }else if(playerChoice == "rock" && computerChoice == "scissors"){
        return (1);
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        return (1);
    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        return (1);
    }
    // lose = 2
    else {
        return (2);
    }
}

function randomizechoice(){
    let choice = Math.floor(Math.random()*3)
        if (choice == 0){
            return ("rock");
        }
        else if (choice == 1){
            return ("paper");
        }
        else if (choice == 2){
            return ("scissors");
        }

}

function game(){
    let wins = 0;
    let losses = 0;
    let ties = 0;
    for (let i=1; i<6; i++){
        console.log ("Round " + i + "!")
        let playerChoice = prompt("Type rock paper or scissors to make your selection").toLowerCase();
        let computerChoice = randomizechoice();
        let outcome = playRound(playerChoice, computerChoice);

        let win_message = "You won! " + playerChoice + " beats " + computerChoice;
        let lose_message = "You lose! " + computerChoice + " beats " + playerChoice;
        let tie_message = "You tied! You both picked " + playerChoice;

        if (outcome == 0){
            console.log(tie_message);
            ties += 1;
        }
        else if (outcome == 2){
            console.log(lose_message)
            losses += 1;
        }
        else{
            console.log (win_message);
            wins += 1;
        }
        console.log("Wins: " + wins + "  | Ties: " + ties + "  | Losses: " + losses);
        console.log("------------------------------------------------------")
    }
}

game();