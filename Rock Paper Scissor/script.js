let userScore = 0;
let compScore = 0;
const result = document.querySelector("#result");
const resUser = document.querySelector("#user-choice");
const resComp = document.querySelector("#comp-choice");
const yourScore = document.querySelector("#you");
const CompScore = document.querySelector("#comp");
const reset = document.querySelector("#reset");

reset.addEventListener("click", function() {

    setTimeout(function() {
    console.log("Reset button clicked");
    userScore = 0;
    compScore = 0;
    reset.setAttribute('class', 'hide');
    result.setAttribute('class', 'hide');
    yourScore.innerText = `${userScore}`;
    CompScore.innerText = `${compScore}`;
    resComp.innerText = "";
    resUser.innerText = "";
    }, 250);
   
    
});
const genCompChoice = () =>{    
    let arr = ["rock" , "paper" , "scissor"];  
    const num = Math.floor(Math.random() * 3);
    return arr[num];
};
const DramGame = () => {
    console.log("Game was draw.");
    result.innerText = "Draw";
    result.style.backgroundColor = "rgba(169, 169, 169, 0.3)";
    result.style.color = "#000000"; 
    result.style.padding = "10px"; 
};
const showWinner = (userwin) =>{
    if(userwin){
        console.log("You Win!");
        result.innerText = "You Win!";
        result.style.backgroundColor = "rgba(100, 255, 120, 0.4)";
        result.style.color = "#00ff00"; 
        result.style.padding = "10px"; 
        userScore++;
    }
    else {
        console.log("You Lose!");
        result.innerText = "You Lose!";
        result.style.backgroundColor = "rgba(255, 81, 81, 0.3)";
        result.style.color = "#ff0000"; 
        result.style.padding = "10px"; 
        compScore++;
    }
};
const showResult = (userchoice, compchoice) => {
   
    resUser.innerHTML = ` You Choose   <b>${userchoice}  </b>`;
    resComp.innerHTML = `Computer Choose <b>${compchoice} </b>`;
    yourScore.innerText = `${userScore}`;
    CompScore.innerText = `${compScore}`;

};

const opt = document.querySelectorAll(".option");
opt.forEach((option)=> {
    option.addEventListener("click",()=> {
        const compchoice = genCompChoice();
        const userchoice = option.getAttribute("id");
        console.log("choices", userchoice , compchoice);

        if( userchoice === compchoice ){
            DramGame();
        }
        else {
            let userwin = true;
            if(userchoice === "rock"){
                userwin = compchoice === "paper" ? false : true;
            }
            else if(userchoice === "paper"){
                userwin = compchoice === "scissor" ? false : true;
            }
            else{
                userwin = compchoice === "rock" ? false : true;
            }
            showWinner(userwin);
            
        }
        showResult(userchoice,compchoice);
        result.removeAttribute("class");
        reset.removeAttribute("class");
    })
});


