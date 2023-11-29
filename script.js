'use strict';
// Genarate Random Value
function generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}
let secretNumber = generateSecretNumber();
console.log(secretNumber);
// Game Score
let score = 20;
//Dilplay Funtion
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
//Again Button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = generateSecretNumber();
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
});
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('No Value !!!');
    } else if (guess === secretNumber) {
        displayMessage('You Win !!!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        let high = Number(document.querySelector('.highscore').textContent);
        if (score > high) {
            document.querySelector('.highscore').textContent = score;
        }
        console.log(high);
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? 'You Higher !!!' : 'You Lower !!!'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lose !!!!');
            document.querySelector('.score').textContent = 0;
        }
    }
});
