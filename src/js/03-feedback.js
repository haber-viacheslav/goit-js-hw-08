const throttle = require('lodash.throttle');
// import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';
formEl.addEventListener('input', throttle(onFeedbackCatcher, 200));
formEl.addEventListener('submit', onSubmit);

const userData = {};

updateUserData();

function updateUserData() {
  if (localStorage.getItem(FEEDBACK_KEY)) {
    const userData = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '');
    formEl.elements.email.value = userData.email;
    formEl.elements.message.value = userData.message;
  }
}

function onFeedbackCatcher() {
  userData.email = formEl.elements.email.value;
  userData.message = formEl.elements.message.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(userData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(userData);
  e.currentTarget.reset();

  //   localStorage.removeItem(FEEDBACK_KEY);
  localStorage.clear();
}
