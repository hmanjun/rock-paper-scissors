var gameOver = false
var potnArr = ["r","p","s"]


function askPlayerMove(){
    var move = prompt("Input move: 'r','p', or 's'")
    return (move)
}

function AIMove(){
    var randint = Math.floor(Math.random()*(3))
    return (potnArr [randint])
}


askPlayerMove()




/*while(!gameOver){

}
*/

