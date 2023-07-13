let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 70;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      black ${progressValue * 3.6}deg,
      white ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
/*`conic-gradient(
  #4d5bf9 ${progressValue * 3.6}deg,
  #e5e5e5 ${progressValue * 3.6}deg
)*/