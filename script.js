'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.again').addEventListener
    ('click', () => {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 100) + 1;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        displayMessage("Start guessing...");

        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
    })

const check = function () {
    const guess = Number(document.querySelector('.guess').value);
    //When there is no input
    if (!guess) {
        displayMessage("⛔ No Number!");
    }
    //When the player wins
    else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 To High!" : "📉 To Low!");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage("💥 You Lost the game!");
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff4c33';
        }
    }
};

document.querySelector('.check').addEventListener
    ('click', () => {
        check();
    });

document.querySelector('.guess').addEventListener(
    'keydown', (e) => {
        if (e.key === 'Enter')
            check();
    }
)