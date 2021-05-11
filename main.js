//console.log("Hello fucker");

function randomPlay(){
    const plays = ["rock", "paper", "scissors"];
    const rng = Math.floor(Math.random() *3);
    return plays[rng];
}

function playRound(player1, player2){
    const p1 = player1.toLowerCase();
    const p2 = player2.toLowerCase();
    //Win legend: 0=tie; 1=p1 win; 2=p2 win
    let win = 0;
    if (p1 == p2){
        console.log ("You chose:" + p1 + " | Computer chose: " + p2);
        console.log("You tied!");
    } else if (p1 == "rock"){
        if (p2 == "paper"){
            console.log ("You chose:" + p1 + " | Computer chose: " + p2);
            console.log ("You lose! paper beats rock!");
            win = 2;
        } else{
            console.log ("You chose:" + p1 + " | Computer chose: " + p2);
            console.log ("You win! rock beats scissors!");
            win = 1;
        }
    } else if (p1 == "paper"){
        if (p2 == "scissors"){
            console.log ("You chose:" + p1 + " | Computer chose: " + p2);
            console.log ("You lose! scissors beats paper!");
            win = 2;
        } else{
            console.log ("You chose:" + p1 + " | Computer chose: " + p2);
            console.log ("You win! paper beats rock!");
            win = 1;
        }
    } else if (p1 == "scissors"){
        if (p2 == "rock"){
            console.log ("You chose:" + p1 + " | Computer chose: " + p2);
            console.log ("You lose! rock beats scissors!");
            win = 2;
        } else{
            console.log ("You chose:" + p1 + " | Computer chose: " + p2);
            console.log ("You win! scissors beats paper!");
            win = 1;
        };
    };
    //console.log(win);
    return win;
}

function game(){
    console.log("First to 3 wins!")
    console.log("________________________________________");
    let p1wins = 0;
    let p2wins = 0;
    let round = 0; 
    while (p1wins <3 & p2wins <3){
        round +=1;
        let play = prompt("What hand would you like to play for round "+ (round) + "?");
        let roundOutcome = playRound(play, randomPlay());
        if (roundOutcome === 1) {p1wins +=1 }
        else if (roundOutcome === 2) {p2wins +=1 };
        console.log("It is currently " + p1wins + " to " + p2wins + "!");
        console.log("________________________________________");
    }
    if(p1wins == 3){
        console.log("You beat the computer 3 times, you win!");
    }else{
        console.log("The computer got 3 wins! YOU are a FUCKING loser!");
    }
    return 0;
}