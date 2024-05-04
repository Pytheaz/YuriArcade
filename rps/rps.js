let pScore = 0;
let cScore = 0;
const playerScore = document.getElementById("p-score");
const cpuScore = document.getElementById("cpu-score");
const scoreBoard = document.querySelector(".score");
const result = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const pChoice_img = document.getElementById("pChoice");
const cpuChoice_img = document.getElementById("cpuChoice");

function playerChoice(){
    rock.addEventListener('click', function(){
        playRPS("rock");
    });
    paper.addEventListener('click', function(){
        playRPS("paper");
    });
    scissors.addEventListener('click', function(){
        playRPS("scissors");
    });
}

function playRPS(playerPick){
    const cpuPick = () => {
        pick = Math.floor(Math.random()*3);
        switch(pick){
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissors";
        }
    }
    
    checkWin(playerPick, cpuPick());
}


function checkWin(playerPick, cpuPick){
    if(playerPick==="rock"){
        pChoice_img.src = "res/rock.png";
    }
    else if(playerPick==="paper"){
        pChoice_img.src = "res/paper.png";
    }
    else if(playerPick==="scissors"){
        pChoice_img.src = "res/scissors.png";
    }
    if(cpuPick==="rock"){
        cpuChoice_img.src = "res/rock.png";
    }
    else if(cpuPick==="paper"){
        cpuChoice_img.src = "res/paper.png";
    }
    else if(cpuPick==="scissors"){
        cpuChoice_img.src = "res/scissors.png";
    }
    if (playerPick===cpuPick){
		return tie();
	}
	else if ((playerPick==="rock"&&cpuPick==="scissors")||
		(playerPick==="scissors"&&cpuPick==="paper")||
		(playerPick==="paper"&&cpuPick==="rock")){
		return win();
	}
	else if ((cpuPick==="rock"&&playerPick==="scissors")||
		(cpuPick==="scissors"&&playerPick==="paper")||
		(cpuPick==="paper"&&playerPick==="rock")){
		return lose();
	}
}

function win(){
    pScore++;
    playerScore.innerHTML = pScore;
    cpuScore.innerHTML = cScore;
    result.innerHTML = "勝ち!"
    result.style.color = "green";
}

function lose(){
    cScore++;
    playerScore.innerHTML = pScore;
    cpuScore.innerHTML = cScore;
    result.innerHTML = "負け!";
    result.style.color = "red";
}

function tie(){
    result.innerHTML = "同点!";
    result.style.color = "black";
}

playerChoice();

