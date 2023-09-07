// Rock Paper Scissor game

const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn")
const win = document.querySelector("#win")
const draw = document.querySelector("#draw")
const lose = document.querySelector("#lose")

let player;
let computer;
let result;
let winNum=0;
let drawNum=0;
let loseNum=0


choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`
    computerText.textContent = `Computer: ${computer}`
    resultText.textContent = `Result:${checkWinner()}`
    if("You Win!"==checkWinner()){
        winNum += 1
        win.textContent = `Wins:${winNum}`
    }
    else if("Draw"==checkWinner()){
        drawNum +=1
        draw.textContent = `Draw:${drawNum}`
    }
    else if("You Lose!"==checkWinner()){
        loseNum +=1
        lose.textContent = `Lose:${loseNum}`

    }
}))

function computerTurn(){
    const randNum = Math.floor(Math.random()*3)+1

    switch(randNum){
        case 1:
            computer = "✊"
            break
        case 2:
            computer = "✋"
            break
        case 3:
            computer = "✌️"
            break
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw"
    }
    else if(computer == "✊"){
        return (player == "✋") ? "You Win!" : "You Lose!"
    }
    else if(computer == "✋"){
        return (player == "✌️") ? "You Win!" : "You Lose!"
    }
    else if(computer == "✌️"){
        return (player == "✊") ? "You Win!" : "You Lose!"
    }
}

// Rock Paper Scissor game

//data selection method
// const choiceBtns = document.querySelectorAll('[data-selection]')
// choiceBtns.forEach(button => {button.addEventListener('click', () => {
//     player = button.dataset.selection;
//     console.log(player)
//     computerTurn();
//     playerText.textContent = `Player: ${player}`
//     computerText.textContent = `Computer: {computer}`
//     resultText.textContent = checkWinner()
// })
// })