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
    if(pM === aM){
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
    if(result===0){
        console.log("You won")
    } else if(result === 1){
        console.log("AI won")
    } else {
        console.log("It's a tie")
    }
}


var playerMove = askPlayerMove()
var aiMove = AIMove()



/*while(!gameOver){
    var result = checkWinner()
}
*/

