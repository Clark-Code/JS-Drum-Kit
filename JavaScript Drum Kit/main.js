function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //stop function 
    if (!audio) return;

    //rewind to start
    audio.currentTime = 0;

    //play sound
    audio.play();

    //add key transition
    key.classList.add('playing');
}

//remove key transition
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//play sound call funciton
window.addEventListener('keydown', playSound);