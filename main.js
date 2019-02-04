// GLOBAL VARIABLES  (ⓛﻌⓛ*)
var deleteBtn = document.querySelector('.del-btn');
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
var counterNum = 0;
var seconds = 0;
var leaderboard = document.querySelector('.leaderboard');

// function factory ( ͡o ͜ʖ ͡o) // 




// EVENT LISTENERS ʕ•ᴥ•ʔ
leaderboard.addEventListener('click', deleteCard);
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
  if (newMin.value === "" && newMax.value === "" || newMin.value > newMax.value) {
    newMin.classList.add("guess-err")
    newMax.classList.add("guess-err")
    displayCurMin.innerText = '?';
    displayCurMax.innerText = '?';
  } else if (newMin.value > newMax.value) {
    newMin.classList.add("guess-err")
    newMax.classList.add("guess-err")
    displayCurMin.innerText = '?';
    displayCurMax.innerText = '?';
  } else if(newMin.value === "") {
    newMin.classList.add("guess-err")
    displayCurMin.innerText = '?';
    displayCurMax.innerText = '?';
  } else if(newMax.value === "") {
    newMax.classList.add("guess-err")
    displayCurMin.innerText = '?';
    displayCurMax.innerText = '?';
  } else {
    randomNumber(parseInt(newMin.value), parseInt(newMax.value));
    newMin.value ="";
    newMax.value ="";
    newMax.classList.remove("guess-err");
    newMin.classList.remove("guess-err");
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
    element.classList.toggle("unicorn")
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
    element.classList.toggle("unicorn")
  } else if (checkGuessTwo < randoNum) {
    alertChalTwo.innerText = "that's too low!" 
  } else if (checkGuessTwo > randoNum) { 
    alertChalTwo.innerText = "that's too high!"
  } else {
    alertChalTwo.innerText = "guess";
  }
}


function submitGuess(event) {
  counterNum++;
  var guessOneDisplay = document.querySelector('.guess-display-1');
  var guessTwoDisplay = document.querySelector('.guess-display-2');
  var lsNameChange1 = document.querySelector('.updated-name-1');
  var lsNameChange2 = document.querySelector('.updated-name-2');
  guessOneDisplay.innerText = parseInt(guessOne.value);
  guessTwoDisplay.innerText = parseInt(guessTwo.value);
  lsNameChange1.innerText = chalName1Input.value;
  lsNameChange2.innerText = chalName2Input.value;
  errorGuess1();
  errorGuess2();
  errorName1();
  errorName2();
  challengerAlert1();
  challengerAlert2();
  appendCard();
  incrementRange();
}
function errorName1() {
  if (chalName1Input.value === "" ) {
    chalName1Input.classList.add("guess-err");
  } else {
    chalName1Input.classList.remove("guess-err");

  }
}
function errorName2() {
  if (chalName2Input.value === "" ) {
    chalName2Input.classList.add("guess-err");
  } else {
    chalName2Input.classList.remove("guess-err");
  }
}

function errorGuess1() {
  var guessOneDisplay = guessOne.value;
  var guessTwoDisplay = guessTwo.value;
  var lowerRange = parseInt(displayCurMin.innerText);
  var higherRange = parseInt(displayCurMax.innerText);
  if (lowerRange > guessOneDisplay || guessOneDisplay === "") {
    guessOne.classList.add("guess-err");

  } else if (higherRange < guessOneDisplay || guessOneDisplay === "") {
    guessOne.classList.add("guess-err")
  } else {
     guessOne.classList.remove("guess-err")

  }
}
function errorGuess2() {
  var guessOneDisplay = guessOne.value;
  var guessTwoDisplay = guessTwo.value;
  var lowerRange = parseInt(displayCurMin.innerText);
  var higherRange = parseInt(displayCurMax.innerText);
  if (lowerRange > guessTwoDisplay) {
    guessTwo.classList.add("guess-err")
  } else if (higherRange < guessTwoDisplay) {
    guessTwo.classList.add("guess-err")
  } else {
    guessTwo.classList.remove("guess-err")
  }
}

function resetInputs(event) {
  inputsArray.forEach(function(element) {
  element.value = "";    
})
  displayCurMin.innerText = " 1 ";
  displayCurMax.innerText = " 100 ";
  randomNumber(1,100);
}


function clearGame(event) {
  event.preventDefault();
  displayCurMin.innerText = " 1 ";
  displayCurMax.innerText = " 100 ";
  resetInputs();
}

function disableBtn(event) {
 
  if (guessOne.value !== "" || guessTwo.value !== "" || chalName1Input.value !== "" || chalName2Input.value !== ""){
  document.getElementById('disable-btn').disabled=false;
  document.getElementById('disable-btn1').disabled=false; 

  } else if (guessOne.value === "" && guessTwo.value === "" && chalName1Input.value === "" && chalName2Input.value === ""){
  document.getElementById('disable-btn').disabled=true;
  document.getElementById('disable-btn1').disabled=true;   
  };

}

// append card // 
function appendCard() {
  if (parseInt(guessOne.value) === randoNum && parseInt(guessTwo.value) === randoNum) {
    alert('FIX THIS')
  } else if(parseInt(guessOne.value) === randoNum || parseInt(guessTwo.value) === randoNum) {
    generateCard();
  }
}

function generateCard(cardName1, cardName2, winner, counter, seconds) {
  var cardName1 = chalName1Input.value;
  var cardName2 = chalName2Input.value;
  var winner;
  var counter = counterNum;
  var alertChalOne = document.querySelector('.high-low-1').innerText;
  var cardLocal = document.querySelector('.leaderboard');
  if (alertChalOne === 'BOOM!') {
    winner = cardName1;  
  } else {
    winner = cardName2;
  }
  var card = `
  <div class="win-card">
        <article class="win-card-top wc-styling">
          <h5 class="card-name-1">${cardName1}</h5>
         <span class="cur-guess">vs</span>
         <h5 class="card-name-2">${cardName2}</h5>
        </article>
        <article class="win-card-mid border-top-bot">
          <div class="flex-column">
            <div class="align-center">
              <h2>${winner}</h2>
              <h2 class="win flex-center">WINNER</h2>
            </div>
          </div>
        </article>
        <article class="win-card-bot wc-styling">
         <h5><span class="num-of-guesses">${counter}</span> GUESSES</h5>
          <h5><span class="num-of-minutes">${seconds}</span> MINUTES</h5>
          <button class="del-btn">&times;</button>
      </article>
    </div>
    `
    cardLocal.innerHTML += card;

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
  if (guessOneInc === randoNum|| guessTwoInc === randoNum){
    displayCurMin.innerText = lowIncrement -= 10;
    displayCurMax.innerText = highIncrement += 10;
    randomNumber(parseInt(displayCurMin.innerText), parseInt(displayCurMax.innerText));
  }
}

//------------ function jail--------------//
  // function determineTime() {
//   seconds++;
// }

// function startTimer(){
//   var seconds = 0;
//   var alertChalOne = document.querySelector('.high-low-1').innerText;
//   var alertChalTwo = document.querySelector('.high-low-2').innerText;
//   if(alertChalOne !=='BOOM!') {
//     setInterval(determineTime, 1000);
//   } else  {
//     seconds = 0;

//   clearInterval(timerStart);
//   console.log('look at this');

//   }
// }


