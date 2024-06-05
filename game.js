let userScore=0;
let compScore=0;
let message=document.getElementById("msg");
let user_Score=document.getElementById("user_score");
let compt_Score=document.getElementById("comp_score");



const choices= document.querySelectorAll(".choice");
//user choice logic
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      let userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});

//actual game logic
function playGame(userChoice){
    console.log("choice was clicked",userChoice);
    const comptChoice=compGame();
    console.log("computer choice is",comptChoice);

    if(userChoice===comptChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")     //paper , scissor
        {
            userWin=comptChoice==="paper" ? false : true ;
        }
        else if(userChoice==="paper")     //rock,scissors
            {
                userWin=comptChoice==="scissor" ? false : true;
            }
            else{
                userWin=comptChoice==="rock" ? false : true;
            }
            showWinner(userWin);
    }

}

// Computer choice logic
function compGame(){
    const computerChoice=["rock","paper","scissors"];
    const randomIndex= Math.floor((Math.random())*3);
    return computerChoice[randomIndex];
}


function drawGame(){
   console.log("its a draw"); 
   message.innerHTML="Its a Draw";
}

function showWinner(userWin){
   if(userWin){
    console.log("you win")
    message.innerHTML="You Win !!";
    userScore++;
    user_Score.innerText=userScore;
    message.style.backgroundColor="Green";
   }
   else{
    console.log("you lose");
    message.innerHTML="You Lost";
    compScore++;
    compt_Score.innerText=compScore;
    message.style.backgroundColor="red";
   }
}