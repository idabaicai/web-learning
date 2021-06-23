
const panels = document.querySelectorAll('.panel');

panels.forEach((item) => {
  item.addEventListener('click', () => {
    removeActiveClass(panels);
    item.classList.add('active');
  })
})

function removeActiveClass(ele) {
  ele.forEach((item) => {
    item.classList.remove('active');
  })
}