'use strict';
//trunc -->removing any fractional digits.
//random numbers between 1 and 20
let number = Math.trunc(Math.random() * 20) + 1;
//Your Score
let score = 20;
//high score
let highscore = 0;
//display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//compareScoreAndHighScore
let compareScoreAndHighScore = function () {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No Number');
    //when player wins
  } else if (guess === number) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = number;
    compareScoreAndHighScore();
    document.querySelector('.check').disabled = true;
    //when guss not equal number
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;
});
