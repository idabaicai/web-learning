

const num1 = document.querySelector('#num1')

const num2 = document.querySelector('#num2')

const btn = document.querySelector('#add')

function add(a, b) {
  console.log({a, b});
  return a + b
}

btn.addEventListener('click', () => {
  console.log(add(num1.value, num2.value));
})