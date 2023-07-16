const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const winScore = document.querySelector('#win-score');

let isGameOver = false;
let winningScore = parseInt(winScore.value);

winScore.addEventListener('change', () => {
    winningScore = parseInt(winScore.value);
    reset();
});

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        scoreAdder(p1Score);
    }
    if (gameOverCheck(p1Score)) {
        p1Score.classList.add('has-text-success');
        p2Score.classList.add('has-text-danger');
        disableButtons();
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        scoreAdder(p2Score);
    }
    if (gameOverCheck(p2Score)) {
        p2Score.classList.add('has-text-success');
        p1Score.classList.add('has-text-danger');
        disableButtons();
    }
});

resetButton.addEventListener('click', () => {
    reset();
});

const scoreAdder = (score) => {
    let scoreNow = parseInt(score.innerText);
    scoreNow += 1;
    score.innerText = scoreNow;
}

const gameOverCheck = (score) => {
    let scoreNow = parseInt(score.innerText);
    if (scoreNow === winningScore) {
        isGameOver = true;
        return true;
    }
}

const disableButtons = () => {
    p1Button.disabled = true;
    p2Button.disabled = true;
}

const reset = () => {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    isGameOver = false;
    p1Score.classList.remove('has-text-success', 'has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}