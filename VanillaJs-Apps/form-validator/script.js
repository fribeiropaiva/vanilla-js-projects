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

form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequiredFields([username, email, password, confirmPassword]);
});
