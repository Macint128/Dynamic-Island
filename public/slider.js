const slider = document.getElementById('slider');
const sliderStart = document.getElementById('slider-start');
const sliderMiddle = document.getElementById('slider-middle');
const sliderEnd = document.getElementById('slider-end');
const sliderContainer = document.getElementById('slider-container');

function updateSlider() {
  const max = slider.max;
  const val = slider.value;

  const containerWidth = sliderContainer.clientWidth;

  // 진행된 길이 (px)
  const progressWidth = (val / max) * containerWidth;

  // start 너비 고정 20px, end 너비 20px
  // middle은 progressWidth - start 너비
  sliderStart.style.width = "20px";
  sliderStart.style.left = "0";

  sliderMiddle.style.left = "20px";
  sliderMiddle.style.width = `${Math.max(progressWidth - 20, 0)}px`;

  sliderEnd.style.left = `${progressWidth}px`;
  sliderEnd.style.width = "20px";
}

slider.addEventListener('input', updateSlider);


updateSlider();
