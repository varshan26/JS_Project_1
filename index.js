let humanScore = 0;
let computerScore = 0;
let humanchoice='';
let computerchoice='';
let final = '';
let game_on = true;

function getComputerChoice(){
    a = ["rock", "paper", "scissor"];
    return (a[Math.floor(Math.random()*3)]);
};


function playAround(humanchoice,computerchoice){

    console.log(humanchoice);
    console.log(computerchoice);

    if(game_on){
        if(humanchoice == "rock" && computerchoice =="paper"){
            console.log("You lose!");
            computerScore+=1
        }else if(humanchoice == "paper" && computerchoice =="scissor"){
            console.log("You lose!");
            computerScore+=1
        }else if(humanchoice == "scissor" && computerchoice =="rock"){
            console.log("You lose!");
            computerScore+=1
        }else if(humanchoice == computerchoice){
            console.log("Its a Tie!")
        }else{
            console.log("you Win!")
            humanScore+=1
        }

        if(humanScore==5){
            console.log("You are the final Winner!");
            game_on=false;
            const container_3 = document.querySelector("#finale")
            container_3.textContent=("You are the final Winner!")
        }else if(computerScore==5){
            console.log("The computer is the winner!")
            game_on=false;
            const container_3 = document.querySelector("#finale")
            container_3.textContent=("You Loser!")
        }

        const container = document.querySelector("#hscore");
        container.textContent=("Your Score: "+humanScore.toString());
        
        const container_2 = document.querySelector("#cscore");
        container_2.textContent=("Computer Score: "+computerScore.toString());

        console.log("HumanScore :",humanScore);
        console.log("ComputerScore :",computerScore);  
        
    }

    
}

const btn_1 = document.querySelector("#rock")
btn_1.addEventListener("click",()=>{
    playAround("rock",getComputerChoice());
})

const btn_2 = document.querySelector("#paper")
btn_2.addEventListener("click",()=>{
    playAround("paper",getComputerChoice())
})

const btn_3 = document.querySelector("#scissor")
btn_3.addEventListener("click",()=>{
    playAround("scissor",getComputerChoice())
})



