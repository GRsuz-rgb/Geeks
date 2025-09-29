function playSound (sound) {
    const audio = document.querySelector(`audio[data-key="${sound.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${sound.keyCode}"]`);
    if (!audio) return ;

    audio.currentTime = 0; 
    audio.play();
    key.classList.add("playing");
}

function removeTransition(t) {
    if (t.propertyName !== 'transform') return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => 
    key.addEventListener('transitionend', removeTransition)
);
 
window.addEventListener('keydown', playSound);


