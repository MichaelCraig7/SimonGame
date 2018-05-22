
let userScore = {
    user: '',
    score: 0,
    btnValues: ['.b1', '.r2', '.g3', '.y4'],
    simonValues: [],
    userValues: [],
}

$(() => {

showSimonMove = function () {
    
}

startGame = function () {
    // reset()?
    let randomBtnValue = userScore.btnValues[Math.floor(Math.random() * userScore.btnValues.length)]
    userScore.simonValues.push(randomBtnValue)
    showSimonMove()
}

startButton = function () {
    let pName = prompt('WHO CHALLENGES SIMON?', "You cannot win")
    if (pName != null) {
        userScore.user = pName
        startGame()
    }
}


if (uservalue != simonValue)
    gameOver()

bleh = function () {
    console.log(userScore)
}

gameOver = function () {
    let finalScore = userValues.length
    alert(finalScore)
}

reset = function () {
    userScore.score = 0
    userScore.simonValues = []
    userScore.userValues = []
}

    $('.startBtn').click(startButton)
    $('.b1').click(bleh)
    // $('.r2').click(startGame)
    // $('.g3').click(userScore)
    // $('.y4').click(userScore)
})