document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('select').addEventListener('change', handleSelectChange);

  document.querySelectorAll('.toggle-button').forEach(toggleButton => {
    toggleButton.addEventListener('click', handleToggleClick);
  });
});

function handleToggleClick(e) {
  removeActiveClasses();

  e.target.classList.add('active');

  document.querySelector('select').value = e.target.getAttribute('data-value');
}

function handleSelectChange(e) {
  removeActiveClasses();
  document.getElementById(e.target.value).classList.add('active');
}

function removeActiveClasses() {
  document.querySelectorAll('.toggle-button').forEach(t => t.classList.remove('active'));
}
