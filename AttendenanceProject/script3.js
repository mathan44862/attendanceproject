var progressBar2 = document.querySelector(".circular-progress2");
var valueContainer2 = document.querySelector(".value-container2");

var progressValue2 = 0;
var progressEndValue2 = 100;
var speed2 = 50;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
      black ${progressValue2 * 3.6}deg,
      white ${progressValue2 * 3.6}deg )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed);