const cells = document.querySelectorAll('.cell');
const score = document.getElementById("score");
let cell1;
let cell2;
let active = true;
let board = ["", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", "",];

let key = ["a", "a", "b", "b", "c",
            "c", "d", "d", "e", "e",
            "f", "f", "g", "g", "h",
            "h", "i", "i", "j", "j",];

let pairs = 0;
let index1 = -1;
let index2 = -1;
let cardNum = 1;
let round = true;

document.addEventListener('DOMContentLoaded', () => {
    cells.forEach(cell => cell.addEventListener('click', cellClick));
    document.getElementById('restart').addEventListener('click', restartGame);
});
            

function shuffleCards(){
    let index = key.length;
    while (index != 0) {
    let randNum = Math.floor(Math.random() * index);
    index--;
    [key[index], key[randNum]] = [key[randNum], key[index]];
    }
}

img = (keyItem) =>{
    switch(keyItem){
        case "a": return "Apple.png";
        case "b": return "Burger.png";
        case "c": return "Cherry.png";
        case "d": return "Chocolate.png";
        case "e": return "Cookie.png";
        case "f": return "Dango.png";
        case "g": return "Grape.png";
        case "h": return "Pizza.png";
        case "i": return "ShavedIce.png";
        case "j": return "Watermelon.png";
    }
}

function restartGame() {
    active = true;
    key = ["a", "a", "b", "b", "c",
            "c", "d", "d", "e", "e",
            "f", "f", "g", "g", "h",
            "h", "i", "i", "j", "j",];
    board = ["", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", "",];
    pairs = 0;
    index1 = -1;
    index2 = -1;
    cardNum = 1;
    round = true;
    score.innerText = pairs;
    cells.forEach(cell => {
        if(cell.firstElementChild){
            cell.firstElementChild.remove();
         }
        cell.className = 'cell'; // Reset cells
    });
    shuffleCards();
}

shuffleCards();

function cellPlayed(clickedCell, cellIndex) {
    board[cellIndex] = key[cellIndex];
    let keyImg = img(board[cellIndex]);
    let addImg = document.createElement("img");
    addImg.id = "emote";
    addImg.src = "res/"+keyImg;
    addImg.style.width = "50px";
    clickedCell.append(addImg);
}

async function cellClick(clickedEvent) {
    const clicked = clickedEvent.target;
    const cellIndex = parseInt(clicked.getAttribute('data-cell-index'));
    if (board[cellIndex] !== "" || !active) {
        return;
    }

    if(cardNum===1){
        index1 = cellIndex;
        cellPlayed(clicked, cellIndex);
        cell1 = clicked.firstElementChild;
        cardNum = 2;
    }
    else if(cardNum===2){
        index2 = cellIndex;
        cellPlayed(clicked, cellIndex);
        cell2 = clicked.firstElementChild;
        round = false;
        cardNum = 1;
    }

    setTimeout(gameStatus, 500);
}

function gameStatus() {
    if(!round){
        checkPair();
        index1 = -1;
        index2 = -1;
        round = true;
    }
}

function checkPair(){
    console.log(index1);
    console.log(index2);
    if(key[index1]===key[index2]){
        pairs++;
    }
    else{
        board[index1] = "";
        board[index2] = "";
        cell1.remove();
        cell2.remove();
    }
    score.innerText = pairs;
}

console.log(key);

