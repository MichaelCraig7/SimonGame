
let userScore = {
    user: '',
    score: 0,
    btnValues: ['.b1', '.r2', '.g3', '.y4'],
    simonValues: [],
    userValues: [],
}

$(() => {

    scoreUpdate = function () {
        $('.score').html(`
    <h1>${userScore.score}</h1>
    `)
    }

    gameOver = function () {
        let finalScore = userScore.simonValues.length - 1
        alert(finalScore)
    }

    equalCheck = function () {
        let simonV = userScore.simonValues
        let userV = userScore.userValues
        // let correct = true

        console.log(simonV)
        console.log(userV)
        for (let i = 0; i < userV.length; i++) {
            console.log(userV[i])
            console.log(simonV[i])
            if (userV[i] !== simonV[i]) {
                // correct = false
                gameOver()
                return
            }
            if ((userV.length === simonV.length) && (userV[i] === simonV[i])) {
                if (userV.toString() !== simonV.toString()) {
                    gameOver()
                return
            }
            if (userV.toString() === simonV.toString()) {
                userScore.score++
            startGame()
            scoreUpdate()
            return
            }
        }
    }
}


    //     let equalLength = userScore.simonValues.length === userScore.userValues.length
    //     let userV = userScore.userValues
    //     for (i = 0; i < simonV.length; i++) {
    //         if (userV.length < simonV.length && userV.length !== 0) {
    //             equalCheck2()
    //         } else if (userV > 0 && equalLength && (simonV[i] !== userV[i])) {
    //             gameOver()
    //         } else if (equalLength && (simonV[i] === userV[i])) {
    //             userScore.score++
    //             startGame()
    //             scoreUpdate()
    //         }
    //     }
    // }

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

    b1Tester = function () {
        $('.b1 a').removeClass('blue')
        $('.b1 a').addClass('black')
        setTimeout(b1Tester2, 200)
    }
    b1Tester2 = function () {
        $('.b1 a').removeClass('black')
        $('.b1 a').addClass('blue')
    }

    r2Tester = function () {
        $('.r2 a').removeClass('red')
        $('.r2 a').addClass('black')
        setTimeout(r2Tester2, 200)
    }
    r2Tester2 = function () {
        $('.r2 a').removeClass('black')
        $('.r2 a').addClass('red')
    }

    g3Tester = function () {
        $('.g3 a').removeClass('green')
        $('.g3 a').addClass('black')
        setTimeout(g3Tester2, 200)
    }
    g3Tester2 = function () {
        $('.g3 a').removeClass('black')
        $('.g3 a').addClass('green')
    }

    y4Tester = function () {
        $('.y4 a').removeClass('yellow')
        $('.y4 a').addClass('black')
        setTimeout(y4Tester2, 200)
    }
    y4Tester2 = function () {
        $('.y4 a').removeClass('black')
        $('.y4 a').addClass('yellow')
    }

    showSimonMove = function () {
        let simonArr = userScore.simonValues
        inc = 0
        for (i = 0; i < simonArr.length; i++) {
            if (simonArr[i] === '.b1') {
                setTimeout(b1Tester, inc += (i + i + 1 * 500))
            } else if (simonArr[i] === '.r2') {
                setTimeout(r2Tester, inc += (i + i + 1 * 500))
            } else if (simonArr[i] === '.g3') {
                setTimeout(g3Tester, inc += (i + i + 1 * 500))
            } else if (simonArr[i] === '.y4') {
                setTimeout(y4Tester, inc += (i + i + 1 * 500))
            }
        }
    }

    startGame = function () {
        // reset()?
        let randomBtnValue = userScore.btnValues[Math.floor(Math.random() * userScore.btnValues.length)]
        userScore.simonValues.push(randomBtnValue)
        userScore.userValues = []
        delaySimon()
    }

    startButton = function () {
        let pName = prompt('WHO CHALLENGES SIMON?', "You cannot win")
        if (pName != null) {
            userScore.user = pName
            startGame()
        }
    }

    reset = function () {
        userScore.score = 0
        userScore.userValues = []
        startGame()
    }

    $('.startBtn').click(startButton)
    $('.b1').on('click', function () {
        btnAssignmentB1()
        equalCheck()
    })
    $('.r2').on('click', function () {
        btnAssignmentR2()
        equalCheck()
    })
    $('.g3').on('click', function () {
        btnAssignmentG3()
        equalCheck()
    })
    $('.y4').on('click', function () {
        btnAssignmentY4()
        equalCheck()
    })
})