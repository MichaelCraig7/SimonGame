
// Value Holders

let valueHolder = {
    user: '',
    score: 0,
    btnValues: ['.b1', '.r2', '.g3', '.y4'],
    simonValues: [],
    userValues: [],
}

let diffValues = {
    easy: 1,
    med: 0,
    hard: 0,
    up: 1,
}

$(() => {

    var audio1 = new Audio('etc/audio1.wav');
    var audio2 = new Audio('etc/audio7.wav');
    var audio3 = new Audio('etc/audio3.wav');
    var audio4 = new Audio('etc/audio8.wav');
    // var audio5 = new Audio('etc/audio5.wav');
    var audio6 = new Audio('etc/audio6.mp3');

// Difficulty Changing Functions

    change = function () {
        if (diffValues.easy === 1 && diffValues.hard === 0 && diffValues.med === 0) {
            diffValues.easy = 0
            diffValues.med = 1
            diffValues.up = .5
        } else if (diffValues.easy === 0 && diffValues.hard === 0 && diffValues.med === 1) {
            diffValues.med = 0
            diffValues.hard = 1
            diffValues.up = .33
        } else if (diffValues.easy === 0 && diffValues.hard === 1 && diffValues.med === 0) {
            diffValues.hard = 0
            diffValues.easy = 1
            diffValues.up = 1
        }
    }

    startBtnToResetMedium = function () {
        change()
        $('.difficulty').text(`
            MEDIUM
        `)
    }

    startBtnToResetHard = function () {
        change()
        $('.difficulty').text(`
            HARD
        `)
    }

    startBtnToResetEasy = function () {
        change()
        $('.difficulty').text(`
            EASY
        `)
    }

    hardness = function () {
        if (diffValues.easy === 1) {
            startBtnToResetMedium()

            return
        } else if (diffValues.med === 1) {
            startBtnToResetHard()
            return
        } else if (diffValues.hard === 1) {
            startBtnToResetEasy()
            return
        }
    }

// DOM Text Manipulation

    startBtnToReset = function () {
        $('.stBtn').text(`
            RESET
        `)
    }

    scoreUpdate = function () {
        $('.score').html(`
            <h4>${valueHolder.score}</h4>
        `)
    }

    scoreChange = function () {
        $('.scoreWord').html(`
            <h4>${'GAME OVER'}</h4>
        `)
    }

    finalWordRevert = function () {
        $('.scoreWord').html(`
            <h4>${'SCORE'}</h4>
        `)
    }

// Break/Fix Button Functionality

    btnBreak = function () {
        document.getElementsByClassName(".b1").disabled = true
        document.getElementsByClassName(".r2").disabled = true
        document.getElementsByClassName(".g3").disabled = true
        document.getElementsByClassName(".y4").disabled = true
        // $('.b1 a').removeClass('.b1 blue')
        // $('.b1 a').addClass('black')
        // $('.r2').removeClass('.r2 red')
        // $('.r2').addClass('black')
        // $('.g3').removeClass('.g3 green')
        // $('.g3').addClass('black')
        // $('.y4 a').removeClass('.y4 yellow')
        // $('.y4 a').addClass('black')
    }

    btnFix = function () {
        document.getElementsByClassName(".b1").disabled = false
        document.getElementsByClassName(".r2").disabled = false
        document.getElementsByClassName(".g3").disabled = false
        document.getElementsByClassName(".y4").disabled = false
    }

// End Game

    gameOver = function () {
        let finalScore = valueHolder.simonValues.length - 1
        audio6.play()
        scoreChange()
        btnBreak()
    }

// Check Simon Array VS User Array

    equalCheck = function () {
        let simonV = valueHolder.simonValues
        let userV = valueHolder.userValues
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
                    valueHolder.score++
                    startGame()
                    scoreUpdate()
                    return
                }
            }
        }
    }

// Button Functionality

    btnAssignmentB1 = function () {
        valueHolder.userValues.push('.b1')
    }

    btnAssignmentR2 = function () {
        valueHolder.userValues.push('.r2')
    }

    btnAssignmentG3 = function () {
        valueHolder.userValues.push('.g3')
    }

    btnAssignmentY4 = function () {
        valueHolder.userValues.push('.y4')
    }

    delaySimon = function () {
        setTimeout(showSimonMove, 500)
    }

// Button Audio and Animation

    b1Tester = function () {
        $('.b1 .btn-floating').removeClass('blue')
        $('.b1 .btn-floating').addClass('black')
        audio1.play()
        setTimeout(b1Tester2, 200)
    }
    b1Tester2 = function () {
        $('.b1 .btn-floating').removeClass('black')
        $('.b1 .btn-floating').addClass('blue')
    }

    r2Tester = function () {
        $('.r2 .btn-floating').removeClass('red')
        $('.r2 .btn-floating').addClass('black')
        audio2.play()

        setTimeout(r2Tester2, 200)
    }
    r2Tester2 = function () {
        $('.r2 .btn-floating').removeClass('black')
        $('.r2 .btn-floating').addClass('red')
    }

    g3Tester = function () {
        $('.g3 .btn-floating').removeClass('green')
        $('.g3 .btn-floating').addClass('black')
        audio3.play()

        setTimeout(g3Tester2, 200)
    }
    g3Tester2 = function () {
        $('.g3 .btn-floating').removeClass('black')
        $('.g3 .btn-floating').addClass('green')
    }

    y4Tester = function () {
        $('.y4 .btn-floating').removeClass('yellow')
        $('.y4 .btn-floating').addClass('black')
        audio4.play()

        setTimeout(y4Tester2, 200)
    }
    y4Tester2 = function () {
        $('.y4 .btn-floating').removeClass('black')
        $('.y4 .btn-floating').addClass('yellow')
    }

    showSimonMove = function () {
        let simonArr = valueHolder.simonValues
        let inc = 0
        for (i = 0; i < simonArr.length; i++) {
            if (simonArr[i] === '.b1') {
                setTimeout(b1Tester, inc += (i + i + 1 * (750 * diffValues.up)))
            } else if (simonArr[i] === '.r2') {
                setTimeout(r2Tester, inc += (i + i + 1 * (750 * diffValues.up)))
            } else if (simonArr[i] === '.g3') {
                setTimeout(g3Tester, inc += (i + i + 1 * (750 * diffValues.up)))
            } else if (simonArr[i] === '.y4') {
                setTimeout(y4Tester, inc += (i + i + 1 * (750 * diffValues.up)))
            }
        }
    }

// Game Start

    startGame = function () {
        let randomBtnValue = valueHolder.btnValues[Math.floor(Math.random() * valueHolder.btnValues.length)]
        valueHolder.simonValues.push(randomBtnValue)
        valueHolder.userValues = []
        delaySimon()
        startBtnToReset()
    }

    startButton = function () {
        // let pName = prompt('WHO CHALLENGES SIMON?', "Name?")
        // if (pName != null) {
        //     valueHolder.user = pName
        reset()
        // }
    }

    reset = function () {
        valueHolder.score = 0
        valueHolder.userValues = []
        valueHolder.simonValues = []
        startGame()
        scoreUpdate()
        finalWordRevert()
        btnFix()
    }


// Click & Keydown Events

    $('.stBtn').click(startButton)
    $('.difficulty').click(hardness)
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
        if (e.keyCode === 32) {
            startButton()
        }
    })

    $(document).keydown(function (e) {
        if (e.keyCode === 38) {
            btnAssignmentB1()
            equalCheck()
            audio1.play()
        }
    })

    $(document).keydown(function (e) {
        if (e.keyCode === 37) {
            btnAssignmentR2()
            equalCheck()
            audio2.play()
        }
    })

    $(document).keydown(function (e) {
        if (e.keyCode === 39) {
            btnAssignmentG3()
            equalCheck()
            audio3.play()
        }
    })

    $(document).keydown(function (e) {
        if (e.keyCode === 40) {
            btnAssignmentY4()
            equalCheck()
            audio4.play()
        }
    })

})