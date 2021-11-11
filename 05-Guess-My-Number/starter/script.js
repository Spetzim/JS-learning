'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct Number!!🎉";


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = Number(document.querySelector('.highscore').value);


document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //No input
    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No Number!"

        // Correct input (Player wins)
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!!";
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.highscore').textContent = score;

        // Input too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📈 Too High!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }

        //Input too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📉 Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }
});


// CHALLENGE #1 (Restart game when clicking "Again!") 
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'

});