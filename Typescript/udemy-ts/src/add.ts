const input1 = document.querySelector('#num1')! as HTMLInputElement

const input2 = document.querySelector('#num2')! as HTMLInputElement

const btn1 = document.querySelector('#add')

function addNum(a: number, b: number) {
  return a + b
}

btn1?.addEventListener('click', () => {
  console.log(addNum(parseInt(input1.value), parseInt(input2.value)))
  console.log('hello');
  
})