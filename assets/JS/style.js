var gameOver = false
var potnArr = ["r","p","s"]
var playerWins = 0
var aiWins = 0


function askPlayerMove(){
    var move = prompt("Input move: 'r','p', or 's'")
    return move
}

function AIMove(){
    var randint = Math.floor(Math.random()*(3))
    return potnArr[randint]
}
 //0 means player won, 1 means ai won, 2 means tie
function checkWinner(pM, aM){
    if(pM == aM){
        return 2
    } else if(pM === 'r' && aM ==='p'){
        aiWins++
        return 1
    } else if(pM === 'p' && aM ==='s'){
        aiWins++
        return 1
    } else if(pM === 's' && aM ==='r'){
        aiWins++
        return 1
    } else {
        playerWins++
        return 0
    }
}

function printScore(result){
    if(result === 0){
        alert("You won")
    } else if(result === 1){
        alert("AI won")
    } else {
        alert("It's a tie")
    }
}

function printScoreBoard(){
    alert ("Player wins: " + playerWins + "Computer wins: " + aiWins)
}





while(!gameOver){
    var playerMove = askPlayerMove()
    var aiMove = AIMove()
    alert("You made:" + playerMove + " Ai made:" + aiMove)
    var result = checkWinner(playerMove, aiMove)
    printScore(result)
    printScoreBoard()
    gameOver = !confirm("Want to play again?")

}


