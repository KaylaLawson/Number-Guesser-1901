// GLOBAL VARIABLES

var updateBtn = document.querySelector('.update-btn');
var displayCurMin = document.querySelector('.cur-min');
var displayCurMax = document.querySelector('.cur-max');
var challengerOneName = document.querySelector('.chal-name-1');
var challengerOneGuess = document.querySelector('.chal-guess-1');
var challengerTwoName = document.querySelector('.chal-name-2');
var challengerTwoGuess = document.querySelector('.chal-guess-2');

// EVENT LISTENERS

updateBtn.addEventListener('click', setRange);
// FUNCTIONS

// Grab minInput and maxInput and create a conditional range 
// print both to respective html places
// use the inputted values as conditionals for the guess

function setRange(event) {
 
    event.preventDefault();
    var newMin = parseInt(document.querySelector('.inp-min-range').value);
    var newMax = parseInt(document.querySelector('.inp-max-range').value);

    displayCurMin.innerText = newMin;
    displayCurMax.innerText = newMax;
    randomNumber(newMin, newMax);
}

function randomNumber(min, max) {
// Create a random number
// With parameters between the minInput and maxInput
  var rando = Math.floor(Math.random()*(max-min))+ min;
  console.log(rando);
}