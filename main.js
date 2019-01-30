// GLOBAL VARIABLES

var updateBtn = document.querySelector('.update-btn');
var submitBtn = document.querySelector('.submit-guess-btn');
var resetBtn = document.querySelector('.reset-game-btn');
var displayCurMin = document.querySelector('.cur-min');
var displayCurMax = document.querySelector('.cur-max');
var chalName1Input = document.querySelector('.chal-name-1');
var chalName2Input = document.querySelector('.chal-name-2');

// EVENT LISTENERS

updateBtn.addEventListener('click', setRange);
submitBtn.addEventListener('click', submitGuess)
resetBtn.addEventListener('click', resetInputs);





// FUNCTIONS


function setRange(event) {
 
    event.preventDefault();
    var newMin = parseInt(document.querySelector('.inp-min-range').value);
    var newMax = parseInt(document.querySelector('.inp-max-range').value);

    displayCurMin.innerText = newMin;
    displayCurMax.innerText = newMax;
    randomNumber(newMin, newMax);
}

function randomNumber(min, max) {

  var rando = Math.floor(Math.random()*(max-min))+ min;
  console.log(rando);

}


function submitGuess(event) {
    
    event.preventDefault();
    var guessOne = parseInt(document.querySelector('.chal-guess-1').value);
    var guessTwo = parseInt(document.querySelector('.chal-guess-2').value);
    var guessOneDisplay = document.querySelector('.guess-display-1');
    var guessTwoDisplay = document.querySelector('.guess-display-2');
    var lsNameChange1 = document.querySelector('.updated-name-1');
    var lsNameChange2 = document.querySelector('.updated-name-2');

    guessOneDisplay.innerText = guessOne;
    guessTwoDisplay.innerText = guessTwo;
    lsNameChange1.innerText = chalName1Input.value;
    lsNameChange2.innerText = chalName2Input.value;

}

// reset button
// set a class for inputs
// queryselectorall that class
// method for each
  
  
  function resetInputs(event) {
 
    event.preventDefault();

    var inputsArray = document.querySelectorAll('.inputs');

    inputsArray.forEach(function(element) {
      element.value = "";
      element.placeholder = 'Enter'
    })



}
