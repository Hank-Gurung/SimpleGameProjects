const gameBoard = document.querySelector("#gameBoard")
const ctx = gameBoard.getContext("2d")
const scoreText = document.querySelector("#scoreText")
const resetBtn = document.querySelector("#resetBtn")
const gameHeight = gameBoard.height 
const gameWidth = gameBoard.width 
const boardBackground = "white"
const snakecolor = "red"
const snakeBoarder = "black"
const foodColor = "blue"
const unitSize = 25
let running = false
let xVelocity = unitSize
let yVelocity = 0
let foodX
let foodY
let score = 0

let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}

]

window.addEventListener("keydown", changeDirection)
resetBtn.addEventListener("click", resetGame)
gameStart()



function gameStart(){
    running = true
    scoreText.textContent = score
    createFood()
    drawFood()
    nextTick()
}
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard()
            drawFood()
            moveSnake()
            drawSnake()
            checkGameOver()
            nextTick()
        }, 75)
    }
    else{
        displayGameOver()
    }
}

function clearBoard(){
    ctx.fillStyle = boardBackground
    ctx.fillRect(0,0, gameWidth, gameHeight)
}
function createFood(){
    function randomFood(min,max){
        const randNum = Math.round((Math.random()* (max-min) + min)/unitSize) * 25
        return randNum 
    }
    foodX = randomFood(0, gameWidth - unitSize)
    foodY = randomFood(0, gameWidth - unitSize)
}
function drawFood(){
    ctx.fillStyle = foodColor
    ctx.fillRect(foodX, foodY, unitSize, unitSize)
}
function moveSnake(){
    const head = {x: snake[0].x + xVelocity,
                  y:snake[0].y + yVelocity}

    snake.unshift(head)
    if(snake[0].x == foodX && snake[0].y == foodY){
        score += 1
        scoreText.textContent = score
        createFood()

    }
    else{
        snake.pop()
    }
}
function drawSnake(){
    ctx.fillStyle = snakecolor
    ctx.strokeStyle = snakeBoarder
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize )
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize )
    })
}
function changeDirection(){

}
function checkGameOver(){

}
function displayGameOver(){

}
function resetGame(){

}
