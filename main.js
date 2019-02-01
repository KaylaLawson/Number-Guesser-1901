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
var newMin = document.querySelector('.inp-min-range');
var newMax = document.querySelector('.inp-max-range');


// EVENT LISTENERS ʕ•ᴥ•ʔ

updateBtn.addEventListener('click', setRange);
submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', resetInputs);
clearBtn.addEventListener('click', clearGame);
infoBox.addEventListener('keyup', disableBtn);

// FUNCTIONS (╯°□°）╯︵ ┻┻

// if no value use 1 or 100 woop
function setRange(event) {
  event.preventDefault();
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
    element.classList.remove("unicorn")
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
  } else{
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
  challengerAlert1();
  challengerAlert2();
}


function errorGuess1() {
  var minRangeVar = document.querySelector('.cur-min');
  var lowerRange = parseInt(minRangeVar.innerText);
  var maxRangeVar = document.querySelector('.cur-max');
  var higherRange = parseInt(maxRangeVar.innerText);
  var guessOneDisplay = parseInt(guessOne.value);
  var guessTwoDisplay = parseInt(guessTwo.value);
  if (lowerRange > guessOneDisplay) {
    guessOne.value = "";
    guessOne.placeholder='Invalid';

  } else if (higherRange < guessOneDisplay) {
    guessOne.value = "";
    guessOne.placeholder='Invalid';
  } 
}



function errorGuess2() {

  var minRangeVar = document.querySelector('.cur-min');
  var lowerRange = parseInt(minRangeVar.innerText);
  var maxRangeVar = document.querySelector('.cur-max');
  var higherRange = parseInt(maxRangeVar.innerText);
  var guessOneDisplay = parseInt(guessOne.value);
  var guessTwoDisplay = parseInt(guessTwo.value);
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
  }) 
}

function resetError(event) {
  inputsArray.forEach(function(element) {
  if (element.value === "") {
      element.placeholder = 'Not a valid entry';
  }
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