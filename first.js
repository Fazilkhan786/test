 let userScore=0;
 let compScore=0;

 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const  genCompChoice =()=>{
     const options=["rock","paper","scissor"]
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
 }
     
     
     const gameDraw=()=>{    
        console.log("game was draw");
        msg.innerText="game Draw";
     }
        const showWinner=(userWin)=>{
            if(userWin){
                console.log("You win");
                msg.innerText="You win";
            }else{
                console.log("You lose");
                msg.innerText="You lose";
            }
        }
     
      
playGame=(userChoice)=>{
    console.log("user choice", userChoice);
    // 
    const compChoice =genCompChoice();
    console.log("comp choice",compChoice);
    if(userChoice===compChoice){
        gameDraw();
    }
        else{
            let userWin=true;
            if(userChoice==="rock"){
               userWin= compChoice==="paper"?false:true;
            }else if(userChoice==="paper"){
                userWin=compChoice==="scissor"?false:true;
            }else{
                userWin=compChoice==="rock"?false:true;
            }
            showWinner(userWin);
        }
    }

 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was ckicked",userChoice);
        playGame(userChoice);
    });
 });
