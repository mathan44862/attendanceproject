var progressBar3 = document.querySelector(".circular-progress3");
var valueContainer3 = document.querySelector(".value-container3");

var progressValue3 = 0;
var progressEndValue3 = 40;
var speed3 = 50;

let progress3 = setInterval(() => {
  progressValue3++;
  valueContainer3.textContent = `${progressValue3}%`;
  progressBar3.style.background = `conic-gradient(
      black ${progressValue3 * 3.6}deg,
      white ${progressValue3 * 3.6}deg )`;
  if (progressValue3 == progressEndValue3) {  
    clearInterval(progress3);
  }
}, speed);