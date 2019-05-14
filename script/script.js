

window.addEventListener('keydown', playSound);

function removeFn(e) {
    console.log(e)
    if (e.propertyName  !== "transform") return;
    this.classList.remove('playing')
}

function playSound (e) {
    const sound = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!sound) return ;
    sound.play()
    key.classList.add('playing');
    sound.currentTime = 0;
}

const keys = document.querySelectorAll('.key')

keys.forEach( key => key.addEventListener('transitionend', removeFn))