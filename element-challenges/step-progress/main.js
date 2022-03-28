let stepNumber = 1;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', onStepClick);
  });

  document.querySelector('#next-button').addEventListener('click', () => changeStep(stepNumber + 1));
  document.querySelector('#prev-button').addEventListener('click', () => changeStep(stepNumber - 1));
});

function onStepClick(e) {
  const nextStepNumber = +e.currentTarget.id.split('-')[1];

  const isNextStepValid = stepNumber + 1 === nextStepNumber || stepNumber - 1 === nextStepNumber;
  if (!isNextStepValid) {
    return;
  }

  changeStep(nextStepNumber);
}

function changeStep(nextStepNumber) {
  stepNumber = nextStepNumber;

  if (stepNumber === 4) {
    onStepsComplete();
    return;
  }

  updateSeenSteps(stepNumber);
  updateStepHeaderText(stepNumber);
  updateNextButton(stepNumber);
  updatePreviousButton(stepNumber);
}

function updateSeenSteps(stepNumber) {
  document.querySelectorAll('.step').forEach(step => step.classList.remove('seen'));

  while (stepNumber) {
    document.querySelector('#step-' + stepNumber).classList.add('seen');
    stepNumber--;
  }
}

function updateStepHeaderText(stepNumber) {
  let headerText = '';

  switch (stepNumber) {
    case 1:
      headerText = 'Choose title content';
      break;
    case 2:
      headerText = 'Choose description content';
      break;
    case 3:
      headerText = 'Are you happy now?';
      break;
  }

  document.querySelector('.step-header').textContent = headerText;
}

function updateNextButton(stepNumber) {
  let headerText = '';

  switch (stepNumber) {
    case 1:
      headerText = 'Submit title';
      break;
    case 2:
      headerText = 'Submit description';
      break;
    case 3:
      headerText = 'Are you happy now?';
      break;
  }

  document.querySelector('#next-button').textContent = headerText;
}

function updatePreviousButton(stepNumber) {
  const prevButton = document.querySelector('#prev-button');

  if (stepNumber === 1) {
    prevButton.style.display = 'none';
    return;
  } else {
    prevButton.style.display = 'block';
  }

  let headerText = '';

  switch (stepNumber) {
    case 2:
      headerText = 'Back';
      break;
    case 3:
      headerText = 'No, go back';
      break;
  }

  prevButton.textContent = headerText;
}

function onStepsComplete() {
  document.querySelector('#next-button').style.display = 'none';
  document.querySelector('#prev-button').style.display = 'none';
  document.querySelector('.step-header').textContent = "Ok, we're done. Thanks for sending us your data!";
}
