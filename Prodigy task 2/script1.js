// Get the necessary elements
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let timer; // variable to store the setInterval reference
let isRunning = false; // variable to track if the stopwatch is running
let startTime; // variable to store the start time
let elapsedTime = 0; // variable to store the elapsed time

// Function to start the stopwatch
function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateStopwatch, 10);
  }
}

// Function to pause the stopwatch
function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

// Function to reset the stopwatch
function resetStopwatch() {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  display.textContent = "00:00:00";
}

// Function to update the stopwatch display
function updateStopwatch() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

// Function to format time in hh:mm:ss format
function formatTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
}

// Event listeners for buttons
startBtn.addEventListener("click", startStopwatch);
pauseBtn.addEventListener("click", pauseStopwatch);
resetBtn.addEventListener("click", resetStopwatch);