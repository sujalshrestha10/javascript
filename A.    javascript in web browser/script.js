'use strict';
/*
console.log(
  (document.querySelector('.message').textContent = 'correct number')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log((document.querySelector('.guess').value = 10));

*/
let score = 20;
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'invalid number';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too HIGH FOOL';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'you lost man better luck next time';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too LOW FOOL';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'you lost man better luck next time';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  let secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
