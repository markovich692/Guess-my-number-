'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 9;
// console.log(document.querySelector('.guess'));
// document.querySelector('input .guess').textContent = 4;

const hiddenNumber = Math.round(Math.random() * 20);
console.log(hiddenNumber);

//Initialize the score
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //No Number guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  //Correct guess
  else if (guess === hiddenNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = hiddenNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
  }
  //Wrong guess
  else if (guess < hiddenNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > hiddenNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // document.querySelector('.score').textContent = score;
});
