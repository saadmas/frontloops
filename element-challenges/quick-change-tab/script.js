document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-button').forEach(t => {
    t.addEventListener('click', handleToggleClick);
  });

  document.querySelector('#change-tab').addEventListener('click', onTabIndexEnter);
});

function onTabIndexEnter(e) {
  const tabIndexInput = document.querySelector('#tab-index-input');
  const tabIndex = +tabIndexInput.value;
  const validIndexes = [1, 2, 3];

  if (Number.isNaN(tabIndex) || !validIndexes.includes(tabIndex)) {
    window.alert('Invalid index');
  }

  switch (tabIndex) {
    case 1:
      selectContentType('positive');
      break;
    case 2:
      selectContentType('negative');
      break;
    case 3:
      selectContentType('neutral');
      break;
  }

  tabIndexInput.value = '';
}

function handleToggleClick(e) {
  selectContentType(e.target.id);
}

function selectContentType(contentType) {
  document.querySelectorAll('.toggle-button').forEach(b => b.classList.remove('active'));
  document.getElementById(contentType).classList.add('active');

  document.querySelector('#content-type').textContent = contentType;
}
