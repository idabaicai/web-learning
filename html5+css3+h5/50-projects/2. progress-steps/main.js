
const progress = document.querySelector('#progress');
const preBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');
const length = circles.length;
let curActive = 0;

nextBtn.addEventListener('click', () => {
  if(curActive < length - 1) {
    curActive += 1;
  }
  update();
  console.log(curActive);
});

preBtn.addEventListener('click', () => {
  if(curActive > -1) {
    curActive -= 1;
  }
  update();
  console.log(curActive);
});

const update = () => {
  circles.forEach((item, idx) => {
    if(idx <= curActive) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
  // 设置进度条
  const actives = document.querySelectorAll('.active');
  console.log(actives.length, circles.length);
  const width = ((actives.length - 1)/ (circles.length - 1)) * 100;
  progress.style.width = `${width}%`;
}