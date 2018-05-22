
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
    },


    startGame: function () {
        // reset()?
        let randomBtnValue = userScore.btnValues[Math.floor(Math.random() * userScore.btnValues.length)]
        $(randomBtnValue).append(userScore.simonValues)
        // userScore.simonValues.push(randomBtnValue)
    },
}
// $('b1').append(userValues)
// $('r2').append(userValues)
// $('g3').append(userValues)
// $('y4').append(userValues)

$(() => {
    $('.startBtn').click(userScore.startGame)
})