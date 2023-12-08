//10秒ごとに画像を右にスライドする

const next = document.querySelector(".btn");
const slider = document.querySelectorAll(".scroll li");

let currentIndex = 0;

setInterval(function () {
  currentIndex++;
  if (currentIndex >= slider.length) {
    currentIndex = 0;
  }
  for (let i = 0; i < slider.length; i++) {
    if (i === currentIndex) {
      slider[i].style.display = "block";
    } else if (i !== currentIndex) {
      slider[i].style.display = "none";
    }
  }
}, 1000);
