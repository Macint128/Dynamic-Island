const fill = document.getElementById('slider-fill');
const middle = document.getElementById('slider-middle');

let progress = 0;

function updateSlider(p) {
  const totalWidth = 300;
  const max = 254;
  const progressWidth = (p / max) * totalWidth;

  const cap = 12;
  const middleWidth = Math.max(progressWidth - cap * 2, 0);

  fill.style.width = progressWidth + "px";
  middle.style.width = middleWidth + "px";
}

setInterval(() => {
  progress++;
  if (progress > 254) progress = 0;
  updateSlider(progress);
}, 100);
