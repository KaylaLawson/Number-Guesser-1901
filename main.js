// GLOBAL VARIABLES  (ⓛﻌⓛ*)

var updateBtn = document.querySelector('.update-btn');
var submitBtn = document.querySelector('.submit-guess-btn');
var resetBtn = document.querySelector('.reset-game-btn');
var clearBtn = document.querySelector('.clear-game-btn');
var chalName1Input = document.querySelector('.chal-name-1');
var chalName2Input = document.querySelector('.chal-name-2');
var inputsArray = document.querySelectorAll('.inputs');
var infoBox = document.querySelector('.chal-info');
var guessOne = document.querySelector('.chal-guess-1');
var guessTwo = document.querySelector('.chal-guess-2');
var displayCurMin = document.querySelector('.cur-min');
var displayCurMax = document.querySelector('.cur-max');
var randoNum;

function appendCard() {
  if (parseInt(guessOne.value) === randoNum && parseInt(guessTwo.value) === randoNum) {
    alert('FIX THIS')
  } else if(parseInt(guessOne.value) === randoNum || parseInt(guessTwo.value) === randoNum) {
    generateCard();
  }
}

function generateCard() {
  var cardLocal = document.querySelector('.leaderboard')
  var card = `
  <div class="win-card">
        <article class="win-card-top wc-styling">
          <h5 class="card-name-1">CHALLENGER 1 NAME</h5>
         <span class="cur-guess">vs</span>
         <h5 class="card-name-2">CHALLENGER 2 NAME</h5>
        </article>
        <article class="win-card-mid border-top-bot">
          <div class="flex-column">
           <h2>CHALLENGER NAME</h2>
           <h2 class="win flex-center">WINNER</h2>
          </div>
        </article>
        <article class="win-card-bot wc-styling">
         <h5><span class="num-of-guesses">47</span> GUESSES</h5>
          <h5><span class="num-of-minutes">1.35</span> MINUTES</h5>
          <button class="del-btn">&times;</button>
      </article>
    </div>
    `
    cardLocal.innerHTML += card;

  }





// EVENT LISTENERS ʕ•ᴥ•ʔ

updateBtn.addEventListener('click', setRange);
submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', resetInputs);
clearBtn.addEventListener('click', clearGame);
infoBox.addEventListener('keyup', disableBtn);

window.onload = randomNumber(1, 100);

// FUNCTIONS (╯°□°）╯︵ ┻┻

// if no value use 1 or 100 woop
function setRange(event) {
  event.preventDefault();
  var newMin = document.querySelector('.inp-min-range');
  var newMax = document.querySelector('.inp-max-range');
  displayCurMin.innerText = newMin.value;
  displayCurMax.innerText = newMax.value;
  if (newMin.value === "" && newMax.value === "") {
      newMin.placeholder = 'Invalid';
      newMax.placeholder = 'Invalid';
  } else {
    randomNumber(parseInt(newMin.value), parseInt(newMax.value));
    newMin.value ="";
    newMin.placeholder = "";
    newMax.value ="";
    newMax.placeholder = "";
  }
}

function randomNumber(min, max) {
  console.log(min, max);
  randoNum = Math.floor(Math.random()*(max - min + 1)) + min;
  console.log(randoNum);
}

function challengerAlert1() {
  var checkGuessOne = parseInt(guessOne.value);
  var alertChalOne = document.querySelector('.high-low-1');
  if (checkGuessOne === randoNum) {
    alertChalOne.innerText = "BOOM!"
    var element = document.getElementById("unicorn-jail")
    element.classList.add("unicorn")   
  } else if (checkGuessOne < randoNum) {
    alertChalOne.innerText = "that's too low!" 
  } else if (checkGuessOne > randoNum) { 
    alertChalOne.innerText = "that's too high!"
  } else{
    alertChalOne.innerText = "guess";
  }
}

function challengerAlert2() {
  var checkGuessTwo = parseInt(guessTwo.value);
  var alertChalTwo = document.querySelector('.high-low-2');
  if (checkGuessTwo === randoNum) {
    alertChalTwo.innerText = "BOOM!"
    var element = document.getElementById("unicorn-jail")
    element.classList.add("unicorn")
  } else if (checkGuessTwo < randoNum) {
    alertChalTwo.innerText = "that's too low!" 
  } else if (checkGuessTwo > randoNum) { 
    alertChalTwo.innerText = "that's too high!"
  } else {
    alertChalTwo.innerText = "guess";
  }
}


function submitGuess(event) {
  var guessOneDisplay = document.querySelector('.guess-display-1');
  var guessTwoDisplay = document.querySelector('.guess-display-2');
  var lsNameChange1 = document.querySelector('.updated-name-1');
  var lsNameChange2 = document.querySelector('.updated-name-2');
  guessOneDisplay.innerText = parseInt(guessOne.value);
  guessTwoDisplay.innerText = parseInt(guessTwo.value);
  lsNameChange1.innerText = chalName1Input.value;
  lsNameChange2.innerText = chalName2Input.value;
  resetError();
  errorGuess1();
  errorGuess2();
  appendCard();
  challengerAlert1();
  challengerAlert2();
}

function errorGuess1() {
  var guessOneDisplay = parseInt(guessOne.value);
  var guessTwoDisplay = parseInt(guessTwo.value);
  var lowerRange = parseInt(displayCurMin.innerText);
  var higherRange = parseInt(displayCurMax.innerText);
  if (lowerRange > guessOneDisplay) {
    guessOne.value = "";
    guessOne.placeholder='Invalid';
  } else if (higherRange < guessOneDisplay) {
    guessOne.value = "";
    guessOne.placeholder='Invalid';
  } 
}

function errorGuess2() {
  var guessOneDisplay = parseInt(guessOne.value);
  var guessTwoDisplay = parseInt(guessTwo.value);
  var lowerRange = parseInt(displayCurMin.innerText);
  var higherRange = parseInt(displayCurMax.innerText);
  if (lowerRange > guessTwoDisplay) {
    guessTwo.value = "";
    guessTwo.placeholder='Invalid';
  } else if (higherRange < guessTwoDisplay) {
    guessTwo.value = "";
    guessTwo.placeholder='Invalid';
  }
}

function resetInputs(event) {
  inputsArray.forEach(function(element) {
  if (element.value === "") {
      element.placeholder = 'Not a valid entry';
  } else {
      element.value = "";
      element.placeholder = 'Enter';
     }
  }); 
}

function resetError(event) {
  inputsArray.forEach(function(element) {
  if (element.value === "") {
      element.placeholder = 'Not a valid entry';
  }
  }); 
}

function clearGame(event) {
  event.preventDefault();
  displayCurMin.innerText = " ? ";
  displayCurMax.innerText = " ? ";
  resetInputs();
}

function disableBtn(event) {
  document.getElementById('disable-btn').disabled=false;
  document.getElementById('disable-btn1').disabled=false;
}

