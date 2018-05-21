
let userScore = {
    user: "",
    score: 0,

    startButton: function () {
        let pName = prompt('WHO CHALLENGES SIMON?', "You can't win")
        if (pName != null) {
            this.user = pName
        }
        console.log(userScore)

    }
}

$(() => {
    $('.startBtn').click(userScore.startButton)
})