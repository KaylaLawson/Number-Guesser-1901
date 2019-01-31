// GLOBAL VARIABLES

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

// EVENT LISTENERS

updateBtn.addEventListener('click', setRange);
submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', resetInputs);
clearBtn.addEventListener('click', clearGame);
infoBox.addEventListener('keyup', disableBtn);


// FUNCTIONS


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


function resetInputs(event) {
    inputsArray.forEach(function(element) {
    element.value = "";
      // element.placeholder = 'Enter';
    }) 

}

function clearGame(event) {
     event.preventDefault();
     displayCurMin.innerText = " ? ";
     displayCurMax.innerText = " ? ";
     resetInputs();
     // disableBtn(); how does this work?

}



//Disable the clear button
//conditional to determine if input is empty string
//if empty string then disable
function disableBtn(event) {
         document.getElementById('disable-btn').disabled=false;
         document.getElementById('disable-btn1').disabled=false;
    }

// random number results
// for loop 
// if equals then bam
// for guess 1 if its greater than rando give string if less give other string









