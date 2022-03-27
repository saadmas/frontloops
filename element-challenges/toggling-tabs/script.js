document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-button');

  for (const toggleButton of toggleButtons) {
    toggleButton.addEventListener('click', handleToggleClick);
  }

  const select = document.querySelector('select');
  select.addEventListener('change', handleSelectChange);
});

function handleToggleClick(e) {
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');

  const select = document.querySelector('select');
  select.value = e.target.getAttribute('data-value');
}

function handleSelectChange(e) {
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(t => t.classList.remove('active'));
  document.getElementById(e.target.value).classList.add('active');
}
