const words = ['design', 'frontend', 'backend', 'testing'];

let wordIndex = 0;
let letterIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  let interval;
  autoType();

  function autoType() {
    interval = setInterval(typeNextLetter, 200);
  }

  function typeNextLetter() {
    letterIndex++;

    const hasWordChanged = letterIndex >= words[wordIndex].length;

    document.querySelector('.auto-type').textContent = words[wordIndex].slice(0, letterIndex);

    if (hasWordChanged) {
      letterIndex = 0;
      wordIndex = wordIndex >= words.length - 1 ? 0 : wordIndex + 1;

      clearInterval(interval);
      setTimeout(autoType, 1000);
    }
  }
});
