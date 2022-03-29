document.addEventListener('DOMContentLoaded', () => {
  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
});

function checkVisibility() {
  document.querySelectorAll('.block').forEach(block => {
    const rect = block.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight;

    if (isVisible) {
      block.classList.add('active');
    }
  });
}
