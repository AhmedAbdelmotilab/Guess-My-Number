'use strict';
//Function for create random number from 1 -> 20
let genrateRandomValue = function () {
    return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = genrateRandomValue();
console.log(secretNumber);
// Message Function That Take The message and Print it to the User
const message = function (message) {
    document.querySelector('.message').textContent = message;
};
// Game Score That Started With 20 Points
let score = 20;
const gameScore = function (S) {
    document.querySelector('.score').textContent = S;
};
// HighScore Value
let highscore = 0;

// Style Change IF We WIN !!!
const styleWin = function () {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
};
// Style Change IF Pressed Again !!!
const styleAgainBtn = function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
};
// Again Button
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = genrateRandomValue();
    score = 20;
    styleAgainBtn();
    gameScore(score);
    console.log(secretNumber);
    document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        message('No Value Added !!!');
    } else if (guess === secretNumber) {
        message('You Win !!!');
        styleWin();
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            guess > secretNumber
                ? message('You Higher !!!')
                : message('You Lower !!!');
            score--;
            gameScore(score);
        } else {
            message('You Lose !!!');
            gameScore(0);
        }
    }
});
