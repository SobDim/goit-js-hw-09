import { saveToLS, LoadFromLS } from './form.app/save-load-ls.js';

const form = document.querySelector('.js-feedback-form');

form.addEventListener('submit', onFormAction);
form.addEventListener('input', onFormAction);

init();

function onFormAction(e) {
  const message = e.currentTarget.message.value.trim();
  const email = e.currentTarget.email.value.trim();
  const userData = { email, message };

  if (e.type === 'input') {
    saveToLS('feedback-form-state', userData);
  } else if (e.type === 'submit') {
    e.preventDefault();
    if (!message || !email) return alert('All form fields must be filled in');

    console.log(userData);
    e.target.reset();
    localStorage.removeItem('feedback-form-state');
  }
}

function init() {
  const data = LoadFromLS('feedback-form-state');

  form.elements.email.value = data?.userEmail || '';
  form.elements.message.value = data?.userMessage || '';
}
