let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    a = ["rock", "paper", "scissor"];
    return (a[Math.floor(Math.random()*3)]);
};

function getHumanChoice(){
    let choice = prompt("pick your choice:")
    return (choice.toLowerCase());
};

function playAround(humanchoice,computerchoice){

    console.log(humanchoice);
    console.log(computerchoice);

    if(humanchoice == "rock" && computerchoice =="paper"){
        console.log("You lose!");
    }else if(humanchoice == "paper" && computerchoice =="scissor"){
        console.log("You lose!");
    }else if(humanchoice == "scissor" && computerchoice =="rock"){
        console.log("You lose!");
    }else if(humanchoice == computerchoice){
        console.log("Its a Tie!")
    }else{
        console.log("you Win!")
    }
}

playAround(getHumanChoice(),getComputerChoice());