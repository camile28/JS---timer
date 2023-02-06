//Užduotis://Sukurti Chronometrą su JS.
//1. Sukurti 'start/stop' mygtuką, kuris paleistų ir sustabdytų chronometrą.
//2. Sukurti 'reset' mygtuką, kuris sustabdytų ir panaikintų chronometro reikšmes ('nunulintų')
//3. Sukurti 'lap' mygtuką, kurį paspaudus laikas išsisaugotų ir būtų matomas apačioje.
//Šį mygtuką galima spausti kelis kartus ir taip užfiksuoti laikus (pvz. lenktynėse).
//Sukurti ir 'delete times' mygtuką, kuris šiuos laikus ištrintų.
//4. Išsaugoti laikai su 'lap' funkcija turi būti matomi net ir perkrovus puslapį.

let timerDisplay = document.querySelector("#timer"),
  startStopButton = document.querySelector("#start_stop"),
  resetButton = document.querySelector("#reset"),
  lapButton = document.querySelector("#lap"),
  deleteTimesButton = document.querySelector("#delete_times"),
  lapsDisplay = document.querySelector("#laps");

startStopButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", lapTimer);
deleteTimesButton.addEventListener("click", deleteTimes);

let interval;
let elapsedTime = 0;
let time = false;

//pasira6yti funkciją, kad paleistų laiką
function startTimer() {
  if (!time) {
    interval = setInterval(function () {
      elapsedTime++;
      timerDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
    time = true;
  } else {
    clearInterval(interval);
    time = false;
  }
}
// if (condition1) {
//     // block of code to be executed if condition1 is true
//   } else if (condition2) {
//     // block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     // block of code to be executed if the condition1 is false and condition2 is false
//   }
console.log(time);
console.log(elapsedTime);

//nuresetinti
function resetTimer() {
  clearInterval(interval);
  time = false;
  elapsedTime = 0;
  timerDisplay.textContent = "00:00:00";
  lapsDisplay.innerHTML = " ";
}

function lapTimer() {
  let lapTime = formatTime(elapsedTime);
  let lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapsDisplay.appendChild(lapItem);
}

function deleteTimes() {
  lapsDisplay.innerHTML = " ";
}

function formatTime(timeInSeconds) {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = timeInSeconds % 60;

  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
}
