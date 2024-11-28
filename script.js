'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 9;
// console.log(document.querySelector('.guess'));
// document.querySelector('input .guess').textContent = 4;

const hidden = Math.round(Math.random() * 20);
console.log(hidden);

let score = Number(document.querySelector('.score').textContent);
// let highscore = Number(document.querySelector('.highscore').textContent);
let scoreArray = [];

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess < hidden) {
    document.querySelector('.message').textContent = 'Go up!';
    score = score - 1;
    // console.log(typeof score);
  } else if (guess > hidden) {
    document.querySelector('.message').textContent = 'Go down!';
    score = score - 1;
  } else {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = hidden;
    scoreArray.push(score);
  }
  document.querySelector('.score').textContent = score;
  console.log(scoreArray);
});
