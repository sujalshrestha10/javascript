# PROJECT 1

```JAVASCRIPT

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
//hello
buttons.forEach(function (buton) {
  console.log(buton);
  buton.addEventListener('click', function (color_change) {
    console.log(color_change);
    console.log(color_change.target);
    if (color_change.target.id == 'grey') {
      //body.style.backgroundColor = 'grey';
      body.style.backgroundColor = color_change.target.id;
    }
    if (color_change.target.id == 'white') {
      //body.style.backgroundColor = 'white';
      body.style.backgroundColor = color_change.target.id;
    }
    if (color_change.target.id == 'blue') {
      //body.style.backgroundColor = 'blue';
      body.style.backgroundColor = color_change.target.id;
    }
    if (color_change.target.id == 'yellow') {
      //body.style.backgroundColor = 'yellow';
      body.style.backgroundColor = color_change.target.id;
    }
  });
});
```

## PROJECT 2

```Javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (wha) {
  wha.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'invalid number';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'invalid number';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

### PROJECT 3

```JAVASCRIPT

const clock = document.querySelector('#clock');
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();//  'Hours: " + h + " Minutes: " + m + " Seconds:
}, 1000);
```

#### PROJECT 4

```JAVASCRIPT
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```
