
let userScore = {
    user: '',
    score: 0,
    btnValues: ['.b1', '.r2', '.g3', '.y4'],
    simonValues: [],
    userValues: [],
}

$(() => {

    listenForUser = function () {

    }

    btnAssignmentB1 = function () {
        userScore.userValues.push('.b1')
    }

    btnAssignmentR2 = function () {
        userScore.userValues.push('.r2')
    }

    btnAssignmentG3 = function () {
        userScore.userValues.push('.g3')
    }

    btnAssignmentY4 = function () {
        userScore.userValues.push('.y4')
    }

    delaySimon = function () {
        setTimeout(showSimonMove, 500)
    }

    showSimonMove = function () {
        let simonArr = userScore.simonValues
        for (i = 0; i < simonArr.length; i++) {
            if (simonArr[i] === '.b1') {
                $('.b1 a').removeClass('blue')
                $('.b1 a').addClass('black')
            } else if (simonArr[i] === '.r2') {
                $('.r2 a').removeClass('red')
                $('.r2 a').addClass('black')
            } else if (simonArr[i] === '.g3') {
                $('.g3 a').removeClass('green')
                $('.g3 a').addClass('black')
            } else if (simonArr[i] === '.y4') {
                $('.y4 a').removeClass('yellow')
                $('.y4 a').addClass('black')
            }
        }
        setTimeout(showSimonMove2, 500)
    }

    showSimonMove2 = function () {
        let simonArr = userScore.simonValues
        for (i = 0; i < simonArr.length; i++) {
            if (simonArr[i] === '.b1') {
                $('.b1 a').removeClass('black')
                $('.b1 a').addClass('blue')
            } else if (simonArr[i] === '.r2') {
                $('.r2 a').removeClass('black')
                $('.r2 a').addClass('red')
            } else if (simonArr[i] === '.g3') {
                $('.g3 a').removeClass('black')
                $('.g3 a').addClass('green')
            } else if (simonArr[i] === '.y4') {
                $('.y4 a').removeClass('black')
                $('.y4 a').addClass('yellow')
            }
        }
        listenForUser()
    }

    startGame = function () {
        // reset()?
        let randomBtnValue = userScore.btnValues[Math.floor(Math.random() * userScore.btnValues.length)]
        userScore.simonValues.push(randomBtnValue)
        delaySimon()
    }

    startButton = function () {
        let pName = prompt('WHO CHALLENGES SIMON?', "You cannot win")
        if (pName != null) {
            userScore.user = pName
            startGame()
        }
    }


    // if (uservalue != simonValue)
    //     gameOver()

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
        startGame()
    }

    $('.startBtn').click(startButton)
    $('.b1').click(btnAssignmentB1)
    $('.r2').click(btnAssignmentR2)
    $('.g3').click(btnAssignmentG3)
    $('.y4').click(btnAssignmentY4)
})