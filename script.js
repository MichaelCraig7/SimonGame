
let userScore = {
    user: '',
    score: 0,
    btnValues: ['.b1', '.r2', '.g3', '.y4'],
    simonValues: [],
    userValues: [],
}

$(() => {

    var audio1 = new Audio('etc/audio1.wav');
    var audio2 = new Audio('etc/audio7.wav');
    var audio3 = new Audio('etc/audio3.wav');
    var audio4 = new Audio('etc/audio8.wav');
    // var audio5 = new Audio('etc/audio5.wav');
    var audio6 = new Audio('etc/audio6.mp3');

    scoreUpdate = function () {
        $('.score').html(`
    <h4>${userScore.score}</h4>
    `)
    }

    gameOver = function () {
        let finalScore = userScore.simonValues.length - 1
        audio6.play()
        scoreChange()
    }

    scoreChange = function () {
        $('.scoreWord').html(`
        <h4>${'FINAL SCORE'}</h4>
        `)
    }

    finalWordRevert = function () {
        $('.scoreWord').html(`
        <h4>${'SCORE'}</h4>
        `)
    }

    equalCheck = function () {
        let simonV = userScore.simonValues
        let userV = userScore.userValues
        for (let i = 0; i < userV.length; i++) {
            if (userV[i] !== simonV[i]) {
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
        audio1.play()
        setTimeout(b1Tester2, 200)
    }
    b1Tester2 = function () {
        $('.b1 a').removeClass('black')
        $('.b1 a').addClass('blue')
    }

    r2Tester = function () {
        $('.r2').removeClass('red')
        $('.r2').addClass('black')
        audio2.play()

        setTimeout(r2Tester2, 200)
    }
    r2Tester2 = function () {
        $('.r2').removeClass('black')
        $('.r2').addClass('red')
    }

    g3Tester = function () {
        $('.g3').removeClass('green')
        $('.g3').addClass('black')
        audio3.play()

        setTimeout(g3Tester2, 200)
    }
    g3Tester2 = function () {
        $('.g3').removeClass('black')
        $('.g3').addClass('green')
    }

    y4Tester = function () {
        $('.y4 a').removeClass('yellow')
        $('.y4 a').addClass('black')
        audio4.play()

        setTimeout(y4Tester2, 200)
    }
    y4Tester2 = function () {
        $('.y4 a').removeClass('black')
        $('.y4 a').addClass('yellow')
    }

    showSimonMove = function () {
        let simonArr = userScore.simonValues
        let inc = 0
        for (i = 0; i < simonArr.length; i++) {
            if (simonArr[i] === '.b1') {
                setTimeout(b1Tester, inc += (i + i + 1 * 750))
            } else if (simonArr[i] === '.r2') {
                setTimeout(r2Tester, inc += (i + i + 1 * 750))
            } else if (simonArr[i] === '.g3') {
                setTimeout(g3Tester, inc += (i + i + 1 * 750))
            } else if (simonArr[i] === '.y4') {
                setTimeout(y4Tester, inc += (i + i + 1 * 750))
            }
        }
    }

    startGame = function () {
        let randomBtnValue = userScore.btnValues[Math.floor(Math.random() * userScore.btnValues.length)]
        userScore.simonValues.push(randomBtnValue)
        userScore.userValues = []
        delaySimon()
    }

    startButton = function () {
        let pName = prompt('WHO CHALLENGES SIMON?', "You cannot win")
        if (pName != null) {
            userScore.user = pName
            reset()
        }
    }

    reset = function () {
        userScore.score = 0
        userScore.userValues = []
        userScore.simonValues = []
        startGame()
        scoreUpdate()
        finalWordRevert()
    }


    // click and keydown events

    $('.startBtn').click(startButton)
    $('.b1').on('click', function () {
        btnAssignmentB1()
        equalCheck()
        audio1.play()
    })
    $('.r2').on('click', function () {
        btnAssignmentR2()
        equalCheck()
        audio2.play()
    })
    $('.g3').on('click', function () {
        btnAssignmentG3()
        equalCheck()
        audio3.play()

    })
    $('.y4').on('click', function () {
        btnAssignmentY4()
        equalCheck()
        audio4.play()
    })

    $(document).keydown(function (e) {
        if (e.keyCode == 32) {
            startButton()
        }
    })

    $(document).keydown(function (e) {
        if (e.keyCode == 38) {
            btnAssignmentB1()
            equalCheck()
            audio1.play()
        }
    })

    $(document).keydown(function (e) {
        if (e.keyCode == 37) {
            btnAssignmentR2()
            equalCheck()
            audio2.play()
        }
    })

    $(document).keydown(function (e) {
        if (e.keyCode == 39) {
            btnAssignmentG3()
            equalCheck()
            audio3.play()
        }
    })

    $(document).keydown(function (e) {
        if (e.keyCode == 40) {
            btnAssignmentY4()
            equalCheck()
            audio4.play()
        }
    })

})