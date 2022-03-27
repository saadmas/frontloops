document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', handleToggle);
  });
});

function handleToggle(e) {
  const toggledId = e.target.id;
  const toggles = [...document.querySelectorAll('input')];

  toggles.forEach((input, index) => {
    if (input.id === toggledId) {
      return;
    }

    const randomIndex = Math.round(Math.random() * toggles.length);
    if (randomIndex === index) {
      input.checked = !input.checked;
    }
  });
}
