'use strict';

// Constants
const clock = document.querySelector('.clock');

// Function
function displayTime() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, 0);
  const minutes = String(time.getMinutes()).padStart(2, 0);
  const seconds = String(time.getSeconds()).padStart(2, 0);
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Main
displayTime();
setInterval(displayTime, 1000);
