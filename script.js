function handleSubmit(event) {
  event.preventDefault();
};

window.onload = function () {
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
  const clearBtn = document.querySelector('#clear-btn');
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};

function clearFields () {
  submitBtn.disabled = true;
};

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
};

function isNameValid() {
  const nameElement = document.querySelector('#fullName');
  const nameLength = nameElement.ariaValueMax.length;
  return nameElement >= 10 && nameLength <= 40;
};

function isEmailValid() {
  const emailElement = document.querySelector('#email');
  const emailLength = emailElement.value.length;
  return emailLength >= 10 && emailLength <= 50;
};

function isReasonValid() {
  const reasonElement = document.querySelector('#question');
  const reasonLength = reasonElement.ariaValueMax.length;
  return reasonLength > 0 && reasonLength <= 50;
};