// GLOBAL VARIABLES  (ⓛﻌⓛ*)

var updateBtn = document.querySelector('.update-btn');
var submitBtn = document.querySelector('.submit-guess-btn');
var resetBtn = document.querySelector('.reset-game-btn');
var clearBtn = document.querySelector('.clear-game-btn');
var displayCurMin = document.querySelector('.cur-min');
var displayCurMax = document.querySelector('.cur-max');
var chalName1Input = document.querySelector('.chal-name-1');
var chalName2Input = document.querySelector('.chal-name-2');
var inputsArray = document.querySelectorAll('.inputs');
var infoBox = document.querySelector('.chal-info');
var guessOne = document.querySelector('.chal-guess-1');
var guessTwo = document.querySelector('.chal-guess-2');
var randoNum;

// EVENT LISTENERS ʕ•ᴥ•ʔ

updateBtn.addEventListener('click', setRange);
submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', resetInputs);
clearBtn.addEventListener('click', clearGame);
infoBox.addEventListener('keyup', disableBtn);

// FUNCTIONS (╯°□°）╯︵ ┻┻

function setRange(event) {
  event.preventDefault();
  var newMin = document.querySelector('.inp-min-range');
  var newMax = document.querySelector('.inp-max-range');
  displayCurMin.innerText = newMin.value;
  displayCurMax.innerText = newMax.value;
  randomNumber(parseInt(newMin.value), parseInt(newMax.value));
  newMin.value = "";
  newMax.value = "";   
}

function randomNumber(min, max) {
  console.log(min, max);
  randoNum = Math.floor(Math.random()*(max - min + 1)) + min;
  console.log(randoNum);
  challengerAlert1();
  challengerAlert2();
}

function challengerAlert1() {
  var checkGuessOne = parseInt(guessOne.value);
  var alertChalOne = document.querySelector('.high-low-1');
  if (checkGuessOne === randoNum) {
    alertChalOne.innerText = "boom!"
  } else if (checkGuessOne < randoNum) {
    alertChalOne.innerText = "that's too low!" 
  } else { 
    alertChalOne.innerText = "that's too high!"
  }
}
function challengerAlert2() {
  var checkGuessTwo = parseInt(guessTwo.value);
  var alertChalTwo = document.querySelector('.high-low-2');
  if (checkGuessTwo === randoNum) {
    alertChalTwo.innerText = "boom!"
  } else if (checkGuessTwo < randoNum) {
    alertChalTwo.innerText = "that's too low!" 
  } else { 
    alertChalTwo.innerText = "that's too high!"
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
  challengerAlert1();
  challengerAlert2();
}
// error guess conditional
// create a conditional for the value being within the set range
// function errorGuess() {
//   var lowRange = parseInt(guessOne.value);
//   console.log(lowRange);
//   var highRange = parseInt(guessTwo.value);
//   console.log(highRange);
// }
// errorGuess();

function resetInputs(event) {
  inputsArray.forEach(function(element) {
  element.value = "";
  element.placeholder = 'Enter';
  }) 
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










