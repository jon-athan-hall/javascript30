/**
 * Grab and store all inputs on page, in a NodeList. Not as many
 * helpful methods compared to an Array.
 */
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  console.log(this.value);
  const unit = this.dataset.unit || '';

  /**
   * Backticks for template literal which allows for easy variables within.
   */
  document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}

/**
 * Loop through each input and trigger the update method.
 */
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
