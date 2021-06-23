

const openBtn:HTMLButtonElement = document.getElementById('open') as HTMLButtonElement;
const closeBtn:HTMLButtonElement = document.getElementById('close') as HTMLButtonElement;
const container = document.querySelector('.container');

openBtn.addEventListener('click', () => {
  container?.classList.add('show-nav');
})

closeBtn.addEventListener('click', () => {
  container?.classList.remove('show-nav');
})

