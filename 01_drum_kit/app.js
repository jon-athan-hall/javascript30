/**
 * Finds the audio element associated with the event's keyCode,
 * and then plays that element's sound.
 * @param {Event} e
 */
function playSound(e) {
  /**
   * An attribute selector with a template string to get the node.
   */
  const audioElement = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const keyElement = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audioElement) return;

  /**
   * Audio elements have some unique methods available, to rewind to the start,
   * show controls, change the volume, etc.
   */
  audioElement.currentTime = 0;
  audioElement.play();

  /**
   * The element's classList can be manipulated using add, remove, toggle.
   */
  keyElement.classList.add('key--playing');
}

/**
 * Check if it's a transform event, and then reverse that transition class.
 * The keyword this references the variable that this method was called on.
 * @param {Event} e
 */
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('key--playing');
}

/**
 * Event listener attached to the window Object
 */
window.addEventListener('keydown', playSound);

/**
 * Gather together a NodeList of all the keys, and iterate over it to add
 * another event listener for the end of the CSS transition.
 */
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
