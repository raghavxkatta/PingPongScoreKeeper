const p1 = {
    score: 0,
    button: document.querySelector('.buttonPlayer1'),
    display: document.querySelector('.player1')
};
const p2 = {
    score: 0,
    button: document.querySelector('.buttonPlayer2'),
    display: document.querySelector('.player2')
};
const resetButton = document.querySelector('.reset');
const winningScoreSelect = document.querySelector('.winningScore');
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

const players = [p1, p2];

function reset() {
    isGameOver = false;
    for (let p of players) {
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
    }
}

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});

resetButton.addEventListener('click', reset);


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});
