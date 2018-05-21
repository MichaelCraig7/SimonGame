
let userScore = {
    user: '',
    score: 0,

    startButton: function () {
        let pName = prompt('WHO CHALLENGES SIMON?', "You cannot win")
        if (pName != null) {
            this.user = pName
        }
        console.log(userScore)
    
    }
}

simonValues = []
userValues = []

$('b1').append(userValues)
$('b1').append(userValues)
$('b1').append(userValues)
$('b1').append(userValues)

$(() => {
    $('.startBtn').click(userScore.startButton)
})