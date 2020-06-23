const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function checkRequiredFields(requiredFields) {
  requiredFields.forEach(field => {
    if (field.value.trim() === '') {
      showError(field, `${getFieldName(field)} is required!`);
    } else {
      showSuccess(field);
    }
  })
}

function getFieldName(field) {
  return field.id.charAt(0).toUpperCase() + field.id.slice(1);
}

function checkLength(field, min, max) {
  if (field.value.length < min && field.value.length > 0) {
    showError(field, `The minimum number of characters is ${min}`);
  } else if (field.value.length > max) {
    showError(field, `The maximum number of characters is ${max}`);
  } else {
    showSuccess(field);
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  const errorContainer = formControl.querySelector('small');
  formControl.classList.add('error');
  errorContainer.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequiredFields([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
});
