// GLOBAL VARIABLES

var updateBtn = document.querySelector('.update-btn');
var submitBtn = document.querySelector('.submit-guess-btn');
var displayCurMin = document.querySelector('.cur-min');
var displayCurMax = document.querySelector('.cur-max');
var chalName1Input = document.querySelector('.chal-name-1');
var chalName2Input = document.querySelector('.chal-name-2');

// EVENT LISTENERS

updateBtn.addEventListener('click', setRange);
submitBtn.addEventListener('click', submitGuess)




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

// submit guesses
// var for each 5 input 
// change the latest score values for name and guess
//names should be local and guesses should be global