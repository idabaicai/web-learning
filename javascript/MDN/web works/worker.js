
onmessage = (e) => {
  console.log(e);
  console.log('Message received from main script');
  const workRes = e.data[0] * e.data[1];
  console.log('Posting message back to main script');
  postMessage(workRes)
}