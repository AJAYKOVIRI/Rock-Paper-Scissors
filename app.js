let userScore=0;
let compScore=0;

let reset=document.querySelector("button");
reset.addEventListener("click",()=>{
    window.location.reload();
});

let userScoreUpdate=document.querySelector("#user-score");
let compScoreUpdate=document.querySelector("#comp-score");


let commentary=document.querySelector("#msg");

const choices=document.querySelectorAll(".choice");

    //generate computer choice
const generateComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomChoice=Math.floor(Math.random()*3);
    //rock,paper,scissors
    return options[randomChoice];
}

//alert msgs for results
// const drawMsg=()=>{
//     alert("Match was Drawn !")
// }
// const winMsg=()=>{
//     alert("Woohoo ! You won.")
// }
// const loseMsg=()=>{
//     alert("Oops !, You lost.")
// }

const playGame=(userChoice)=>{
    console.log("user choice =", userChoice);
    const compChoice=generateComputerChoice();
    console.log("compChoice =",compChoice);

    //Game result conditions
    if(userChoice===compChoice){ 
        console.log("It's a Tie !");
        commentary.innerText=`SsssHH! It's a tie. Computer Choosed ${compChoice}`
        commentary.style.color="white";
     }else 
     if(userChoice=="rock" && compChoice=="scissors"){
        console.log("Woohoo !! ,You won this round.");
        commentary.innerText=`Woohoo! You won. Computer Choosed ${compChoice}`
        commentary.style.color="green";
        userScore+=1;
        userScoreUpdate.innerText=userScore;
     }else 
     if(userChoice=="paper" && compChoice=="rock"){
        console.log("Woohoo !! ,You won this round.");
        commentary.innerText=`Woohoo! You won. Computer Choosed ${compChoice}`
        commentary.style.color="green";
        userScore+=1;
        userScoreUpdate.innerText=userScore;
     }else 
     if(userChoice=="scissors" && compChoice=="paper"){
        console.log("Woohoo !! ,You won this round.");
        commentary.innerText=`Woohoo! You won. Computer Choosed ${compChoice}`
        commentary.style.color="green";
        userScore+=1;
        userScoreUpdate.innerText=userScore;
     }else
     {
        console.log("Oops ! You lost this round.");
        commentary.innerText=`Oops! You lost. Computer Choosed ${compChoice}`
        commentary.style.color="red";
        compScore+=1;
        compScoreUpdate.innerText=compScore;
     }

};


choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked !", userChoice);
        playGame(userChoice);
    });
});
