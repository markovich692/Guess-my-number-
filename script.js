'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 9;
// console.log(document.querySelector('.guess'));
// document.querySelector('input .guess').textContent = 4;

let hiddenNumber = Math.round(Math.random() * 20);
console.log(hiddenNumber);

//Initialize the score
let score = 20;
// let highscores = [];
let maxScore = 0;
document.querySelector('.highscore').textContent = maxScore;

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
    document.querySelector('.number').style.width = '30rem';

    if (score > maxScore) {
      maxScore = score;
      document.querySelector('.highscore').textContent = maxScore;
    }

    /////////////////////////////////////
    //INSERT SCORES INTO HIGHSCORES ARRAY
    // highscores.push(score);
    // document.querySelector('.highscore').textContent = maxScore;
    /////////////////////////////////////
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
});

//IMPLEMENT A GAME RESET FUNCTIONALITY

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  hiddenNumber = Math.round(Math.random() * 20);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(hiddenNumber);

  // for (let i = 0; i < highscores.length; i++) {
  //   if (highscores[i] > maxScore) {
  //     maxScore = highscores[i];
  //   }
  // }

  // document.querySelector('.highscore').textContent = maxScore;
  // console.log(maxScore);
});
