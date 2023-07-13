let progressBar1 = document.querySelector(".circular-progress1");
let valueContainer1 = document.querySelector(".value-container1");

let progressValue1 = 0;
let progressEndValue1 = 90;
let speed1 = 50;

let progress1 = setInterval(() => {
  progressValue1++;
  valueContainer1.textContent = `${progressValue1}%`;
  progressBar1.style.background = `conic-gradient(
      black ${progressValue1 * 3.6}deg,
      white ${progressValue1 * 3.6}deg
  )`;
  if (progressValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);
