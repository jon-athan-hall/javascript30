const secondHand = document.querySelector('.clock__hand--second');
const minuteHand = document.querySelector('.clock__hand--minute');
const hourHand   = document.querySelector('.clock__hand--hour');

/**
 * Applies certain rotations to the three clock hands based
 * upon what time it is when the method is called.
 */
function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours   = now.getHours();

  /**
   * Converts the seconds to a percentage, then uses 360 to 
   * calculate the degrees to use in the string literal.
   * Dividing by 60, the multiplying by 360, can be simplified.
   * Add 90 for the 12 o'clock starting offset. 
   */
  const secondsDegrees = seconds * 6 + 90;
  const minutesDegrees = minutes * 6 + 90;
  const hoursDegrees   = hours * 30 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform   = `rotate(${hoursDegrees}deg)`;
}

/**
 * Set an interval of 1 second to call the function.
 */
setInterval(setTime, 1000);
