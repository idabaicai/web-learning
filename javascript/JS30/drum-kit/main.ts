const allKeyDom = document.querySelectorAll('.key')

function removeTransitionClass(e) {
  if(e.propertyName === 'transform') {
    this.classList.remove('playing')
  }
}

allKeyDom.forEach((key) => {
  key.addEventListener('transitionend', removeTransitionClass)
})


const playAudio = (e) => {
  const audio = document.querySelector(`audio[data-key=${e.key}]`) as HTMLAudioElement
  const keyDom = document.querySelector(`div[data-key=${e.key}]`);
  // const allKeyDom = document.querySelector('div.key')
  
  if(audio) {
    // play audio
    audio.currentTime = 0; // rewrite to the start
    audio.play()
    console.log(keyDom);
    // add class
    keyDom.classList.add('playing')
    /**
     * hard code
     */
    // setTimeout(() => {
    //   keyDom.classList.remove('playing')
    // }, 300)
    /**
     * A better way to remove class
     */
  }
}

window.addEventListener('keydown', playAudio)