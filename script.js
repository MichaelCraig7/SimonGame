
let userScore = {
    user: '',
    score: 0,
    btnValues: ['.b1', '.r2', '.g3', '.y4'],
    simonValues: [],
    userValues: [],

    startButton: function () {
        let pName = prompt('WHO CHALLENGES SIMON?', "You cannot win")
        if (pName != null) {
            this.user = pName
        }
        console.log(userScore)
        startGame()
    }
},

startGame: function () {
    for (i=0; )
    // reset()?
    btnValues[Math.floor(Math.random() * btnValues.length)];
},

// $('b1').append(userValues)
// $('r2').append(userValues)
// $('g3').append(userValues)
// $('y4').append(userValues)

$(() => {
    $('.startBtn').click(userScore.startButton)
})