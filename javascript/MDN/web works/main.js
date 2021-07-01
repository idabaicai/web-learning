
const val1 = document.querySelector('#val1');
const val2 = document.querySelector('#val2');
const res = document.querySelector('#result');

if(window.Worker) {
  const worker = new Worker('worker.js');
  first.onchange = () => {
    worker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }
  second.onchange = () => {
    worker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  worker.onmessage = (e) => {
    console.log(e);
    console.log('Message received from worker');
  }
} else {
  console.log('your computer do not support web works');
}