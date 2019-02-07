// GLOBAL VARIABLES  (ⓛﻌⓛ*)
var updateBtn = document.querySelector('.update-btn');
var submitBtn = document.querySelector('.submit-guess-btn');
var resetBtn = document.querySelector('.reset-game-btn');
var clearBtn = document.querySelector('.clear-game-btn');
var deleteLeaderboardBtn = document.querySelector('.clear-lb-btn');
var chalName1Input = document.querySelector('.chal-name-1');
var chalName2Input = document.querySelector('.chal-name-2');
var inputsArray = document.querySelectorAll('.inputs');
var infoBox = document.querySelector('.chal-info');
var guessOne = document.querySelector('.chal-guess-1');
var guessTwo = document.querySelector('.chal-guess-2');
var displayCurMin = document.querySelector('.cur-min');
var displayCurMax = document.querySelector('.cur-max');
var leaderboard = document.querySelector('.leaderboard');
var randoNum;
var counterNum = 0;
var seconds = 0;

// function factory ( ͡o ͜ʖ ͡o) // 

// EVENT LISTENERS ʕ•ᴥ•ʔ//

leaderboard.addEventListener('click', deleteCard);
updateBtn.addEventListener('click', setRange);
submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', resetInputs);
clearBtn.addEventListener('click', clearGame);
deleteLeaderboardBtn.addEventListener('click', deleteLeaderboard)
infoBox.addEventListener('change', disableBtn);
window.onload = randomNumber(1, 100);

/* ----------- FUNCTIONS (╯°□°）╯︵ ┻┻ ------------ */


/* ----------- Gameplay --------*/
function setRange(event) {
  event.preventDefault();
  var newMin = document.querySelector('.inp-min-range');
  var newMax = document.querySelector('.inp-max-range');
  var numMax = parseInt(newMax.value);
  var numMin = parseInt(newMin.value);
  var targetMinRangeErr = document.querySelector('.min-range-err');
  var targetMaxRangeErr = document.querySelector('.max-range-err');
  displayCurMin.innerText = numMin;
  displayCurMax.innerText = numMax;
  if (newMin.value === '' && newMax.value === '' || numMax < numMin) {
    displayError(newMin, newMax, displayCurMin, displayCurMax, targetMinRangeErr);
  } else if(newMin.value === '' || newMax.value === '') {
    displayError(newMin, newMax, displayCurMin, displayCurMax, targetMinRangeErr);
  } else {
    randomNumber(parseInt(newMin.value), parseInt(newMax.value));
    clearError(newMin, newMax, targetMinRangeErr);
  }
}
function randomNumber(min, max) {
  console.log(min, max);
  randoNum = Math.floor(Math.random()*(max - min + 1)) + min;
  console.log(randoNum);
}
function submitGuess(event) {
  counterNum++;
  var guessOneDisplay = document.querySelector('.guess-display-1');
  var guessTwoDisplay = document.querySelector('.guess-display-2');
  var lsNameChange1 = document.querySelector('.updated-name-1');
  var lsNameChange2 = document.querySelector('.updated-name-2');
  var checkGuessOne = parseInt(guessOne.value);
  var checkGuessTwo = parseInt(guessTwo.value);
  var alertChalOne = document.querySelector('.high-low-1');
  var alertChalTwo = document.querySelector('.high-low-2');
  var errorName1 = document.querySelector('.name-1-err');
  var errorName2 = document.querySelector('.name-2-err');
  var guessOneValue = guessOne.value;
  var guessTwoValue = guessTwo.value;
  var error1 = document.querySelector('.guess-1-err');
  var error2 = document.querySelector('.guess-2-err');
  guessOneDisplay.innerText = parseInt(guessOne.value);
  guessTwoDisplay.innerText = parseInt(guessTwo.value);
  lsNameChange1.innerText = chalName1Input.value;
  lsNameChange2.innerText = chalName2Input.value;
  startTimer();
  errorGuess(guessOneValue, guessOne, error1);
  errorGuess(guessTwoValue, guessTwo, error2);
  errorName(chalName1Input, errorName1);
  errorName(chalName2Input, errorName2);
  challengerAlert(checkGuessOne, alertChalOne);
  challengerAlert(checkGuessTwo, alertChalTwo);
  appendCard();
  incrementRange();
}
/* -------- Error Notifications --------*/
function displayError(newMin, newMax, displayCurMin, displayCurMax, targetMinRangeErr) {
    newMin.classList.add('guess-err');
    newMax.classList.add('guess-err');
    displayCurMin.innerText = '?';
    displayCurMax.innerText = '?';
    targetMinRangeErr.classList.remove('hidden');
}
function clearError(newMin, newMax, targetMinRangeErr) {
    newMin.value = '';
    newMax.value = '';
    newMax.classList.remove('guess-err');
    newMin.classList.remove('guess-err');
    targetMinRangeErr.classList.add('hidden');
}
function challengerAlert(checkValue, alertChal) {
  if (checkValue === randoNum) {
    alertChal.innerText = 'BOOM!'
    var element = document.getElementById('unicorn-jail')
    element.classList.toggle('unicorn')
  } else if (checkValue < randoNum) {
    alertChal.innerText = 'that\'s too low!' 
  } else if (checkValue > randoNum) { 
    alertChal.innerText = 'that\'s too high!';
  } else{
    alertChal.innerText = 'guess';
  }
}
function errorName(chal, error) {
  if (chal.value === '' ) {
    chal.classList.add('guess-err');
    error.classList.remove('hidden');
  } else {
    chal.classList.remove('guess-err');
    error.classList.add('hidden');
  }
}
function errorGuess(guessValue, display, error) {
  var lowerRange = parseInt(displayCurMin.innerText);
  var higherRange = parseInt(displayCurMax.innerText);
  if (lowerRange > guessValue || guessValue === '') {
    display.classList.add('guess-err');
    error.classList.remove('hidden');
  } else if (higherRange < guessValue || guessValue === '') {
    display.classList.add('guess-err');
    error.classList.remove('hidden');
  } else {
    display.classList.remove('guess-err');
    error.classList.add('hidden');
  }
}

/* ------- Buttons ------ */
function resetInputs(event) {
  inputsArray.forEach(function(element) {
  element.value = '';    
})
  displayCurMin.innerText = ' 1 ';
  displayCurMax.innerText = ' 100 ';
  randomNumber(1,100);
  endTimer();
  disableBtn();
}
function clearGame(event) {
  event.preventDefault();
  displayCurMin.innerText = ' 1 ';
  displayCurMax.innerText = ' 100 ';
  resetInputs();
  endTimer();
  disableBtn();
}
function disableBtn(event) {
  var resetBtn = document.getElementById('disable-btn');
  var clearBtn = document.getElementById('disable-btn1');
  if (guessOne.value !== '' || guessTwo.value !== '' || chalName1Input.value !== '' || chalName2Input.value !== '') {
    resetBtn.disabled = false;
    clearBtn.disabled = false; 
    resetBtn.classList.remove('color-btn');
    clearBtn.classList.remove('color-btn');   

  } else if (guessOne.value === '' && guessTwo.value === '' && chalName1Input.value === '' && chalName2Input.value === '') {
    resetBtn.disabled = true;
    clearBtn.disabled = true;
    resetBtn.classList.add('color-btn');
    clearBtn.classList.add('color-btn');   
  }
}
/* -------- On Win --------- */
function appendCard() {
  if (parseInt(guessOne.value) === randoNum && parseInt(guessTwo.value) === randoNum) {
    alert('FIX THIS')
  } else if(parseInt(guessOne.value) === randoNum || parseInt(guessTwo.value) === randoNum) {
    generateCard();
  }
}
function generateCard(cardName1, cardName2, winner, counter, secondsCard) {
  var cardName1 = chalName1Input.value;
  var cardName2 = chalName2Input.value;
  var winner;
  var counter = counterNum;
  var secondsTest = seconds / 60;
  var secondsCard = Math.round(secondsTest * 100) / 100;
  var alertChalOne = document.querySelector('.high-low-1').innerText;
  var cardLocal = document.querySelector('.leaderboard');
  if (alertChalOne === 'BOOM!') {
    winner = cardName1;  
  } else {
    winner = cardName2;
  }
  var card = `
    <div class='win-card'>
      <article class='win-card-top wc-styling'>
        <h5 class='card-name-1'>${cardName1}</h5>
        <span class='cur-guess'>vs</span>
        <h5 class='card-name-2'>${cardName2}</h5>
      </article>
      <article class='win-card-mid border-top-bot'>
        <div class='flex-column'>
          <div class='align-center'>
            <h2>${winner}</h2>
            <h2 class='win flex-center'>WINNER</h2>
          </div>
        </div>
      </article>
      <article class='win-card-bot wc-styling'>
        <h5><span class='num-of-guesses'>${counter}</span> <span class="thin">GUESSES</span></h5>
        <h5><span class='num-of-minutes'>${secondsCard}</span> <span class="thin">MINUTES</span></h5>
        <button class='del-btn'>&times;</button>
      </article>
    </div>
  `
    cardLocal.insertAdjacentHTML('afterbegin', card);
}
function deleteLeaderboard() {
  var elem = document.querySelectorAll('.win-card').forEach(function(elem){
    elem.remove();
  });
}
function deleteCard() {
  if (event.target.className === 'del-btn') {
    event.target.parentElement.parentElement.remove();
 }
}
function incrementRange() {
  var lowIncrement = parseInt(displayCurMin.innerText);
  var highIncrement = parseInt(displayCurMax.innerText);
  var guessOneInc = parseInt(guessOne.value);
  var guessTwoInc = parseInt(guessTwo.value);
  if (guessOneInc === randoNum || guessTwoInc === randoNum){
    displayCurMin.innerText = lowIncrement -= 10;
    displayCurMax.innerText = highIncrement += 10;
    randomNumber(lowIncrement, highIncrement);
    seconds = 0;
    counterNum = 0;
  }
}

/* ------- Extensions ---------- */
function timerCount() {
  seconds++;
}
function startTimer() {
  setInterval(timerCount, 1000);
}
function endTimer() {
  seconds = 0;
}




