# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((box) => {
  box.addEventListener('click', (e) => {
    // console.log(e)
    // console.log(e.target)
    console.log(box);
    if (box.id === 'grey') {
      document.body.style.backgroundColor = box.id;
    } else if (box.id === 'white') {
      document.body.style.backgroundColor = box.id;
    } else if (box.id === 'blue') {
      document.body.style.backgroundColor = box.id;
    } else if (box.id === 'yellow') {
      document.body.style.backgroundColor = box.id;
    }
  });
});


```

## project 2 solution

```javascript
const form = document.querySelector('form')
// this usecase will give you empty beacause the form will give the values to the server so, we prevent it by addEventListner() and e.preventDefault()
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === "" || height < 0 || isNaN(height)) {
    results.appendChild(document.createTextNode(`Please enter a valid height ${height}`))
  }
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.appendChild(document.createTextNode(`Please enter a valid weight ${weight}`))
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2) 
    if (bmi < 18.6) {
      results.innerHTML = `<span>BMI is ${bmi} <br> Under Weight</span>`
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>BMI is ${bmi} <br> Normal Range</span>`
    }
    else {
      results.innerHTML = `<span>BMI is ${bmi} <br> Overweight</span>`
    }
  }
})


```

## project 3 solution code

```javascript
clock = document.querySelector('#clock');

setInterval(function () {
  const time = new Date();
  const updatedTime = time.toLocaleTimeString();
  clock.innerHTML = `${updatedTime}`;
}, 1000)


```

## project 4 solution


```javascript

const form = document.querySelector('.form');
const remainGuess = document.querySelector('.lastResult');
const preGuess = document.querySelector('.guesses');

const div = document.createElement('div');
div.className = 'result-message';
form.appendChild(div);

let randNum = Math.floor(Math.random() * 100 + 1);
let guessrem = 10;
let gameActive = true;

function validateInput(num) {
  return !isNaN(num) && num > 0 && num <= 100;
}

function displayMessage(message) {
  div.innerHTML = message;
}

function updateRemainingGuesses() {
  guessrem--;
  remainGuess.innerHTML = guessrem;
}

function addToGuessHistory(num) {
  preGuess.appendChild(document.createTextNode(`${num}, `));
}

function checkGuess(num) {
  if (num === randNum) {
    displayMessage('You guessed it right');
    gameActive = false;
    newGame();
  } else if (num > randNum) {
    displayMessage('Number is high');
    updateRemainingGuesses();
  } else {
    displayMessage('Number is low');
    updateRemainingGuesses();
  }

  if (guessrem === 0) {
    displayMessage(`You have lost. Number was ${randNum}`);
    gameActive = false;
    newGame();
  }
}

function handleSubmit(e) {
  e.preventDefault();

  if (!gameActive) return;

  const num = parseInt(document.getElementById('guessField').value);

  if (!validateInput(num)) {
    alert('Please enter a number from 1 to 100');
    return;
  }

  addToGuessHistory(num);
  checkGuess(num);
  document.getElementById('guessField').value = '';
}

function newGame () {
  const startButton = document.createElement("button")
  startButton.appendChild(document.createTextNode("Start again"))
  form.appendChild(startButton)

  startButton.addEventListener("click", () => {
    randNum = Math.floor(Math.random() * 100 + 1);
    guessrem = 10;
    remainGuess.innerHTML = guessrem
    preGuess.innerHTML = ""
    startButton.remove()
    div.innerHTML = ""
    gameActive = true
  })
}

form.addEventListener("submit", handleSubmit)


```

## project 5 solution

```javascript

const insert = document.querySelector('#insert')

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class: "table">
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? " Space": e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
    </table>
    <div/>
  `
})


```

## project 6 solution

```javascript

let colorChanger = null;

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

start.addEventListener("click", function () {
  // Prevent multiple intervals if clicked multiple times
  if (colorChanger !== null) {
    clearInterval(colorChanger)
  }

  colorChanger = setInterval(function () {
    let one = Math.floor(Math.random() * 256)
    let two = Math.floor(Math.random() * 256)
    let three = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = `rgb(${one}, ${two}, ${three})`
  }, 500)
})

stop.addEventListener("click", function () {
  clearInterval(colorChanger)
  colorChanger = null
})


```