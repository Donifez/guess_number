'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '✨ Correct Number';

// document.querySelector('.number').textContent = 'lol';
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    displayMessage('✂ No Number');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎁 Congrats');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage('Too High');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('you lost the game');
        document.querySelector('.score').textContent = 0;
      }
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    //when guess is too high
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' Too high' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
