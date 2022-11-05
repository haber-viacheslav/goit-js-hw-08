const throttle = require('lodash.throttle');
// import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';
formEl.addEventListener('input', throttle(onFeedbackCatcher, 500));
formEl.addEventListener('submit', onSubmit);

const userData = {};

updateUserData();

function onFeedbackCatcher() {
  userData.email = formEl.elements.email.value;
  userData.message = formEl.elements.message.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(userData));
}

function onSubmit(e) {
  e.preventDefault();
  if (formEl.elements.email.value && formEl.elements.message.value) {
    console.log(userData);

    e.currentTarget.reset();

    localStorage.removeItem(FEEDBACK_KEY);
  }
}

function updateUserData() {
  if (localStorage.getItem(FEEDBACK_KEY)) {
    const userData = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '');
    formEl.elements.email.value = userData.email;
    formEl.elements.message.value = userData.message;
  }
}
