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

const secretNumber = Math.trunc(Math.random() * 20) + 1; // we add the +1 beacsue we would never actually get 20
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    //if there is no guess (0 is falsey value)
    document.querySelector('.message').textContent = 'No Number!😡'; // if statement checks for value
  } else if (guess === secretNumber) {
    //guess same as number
    document.querySelector('.message').textContent =
      'You guessed Correctly!!🎉';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent =
      'You need to guess higher 👆';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent =
      'You need to guess lower 👇';
  }
});
