'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! ';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // we add the +1 beacsue we would never actually get 20
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    //if there is no guess (0 is falsey value)
    document.querySelector('.message').textContent = 'No Number!😡'; // if statement checks for value
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'You guessed Correctly!!🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is correct
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'You need to guess higher 👆';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      //when guess is too low
    } else {
      document.querySelector('.message').textContent = 'You lost the game ;(';
      document.querySelector('.score').textContent = 0;
    }
    //////////////////////////////////////////
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'You need to guess lower 👇';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      //when guess is too high
    } else {
      document.querySelector('.message').textContent = 'You lost the game ;(';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //resetting all values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
