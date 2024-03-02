import { saveToLS, LoadFromLS } from './form.app/save_load_ls';

const form = document.querySelector('.js-feedback-form');

form.addEventListener('submit', onFormAction);
form.addEventListener('input', onFormAction);

init();

function onFormAction(e) {
  const userMessage = e.currentTarget.message.value;
  const userEmail = e.currentTarget.email.value;
  const userData = { userEmail, userMessage };

  if (e.type === 'input') {
    saveToLS('formData', userData);
  } else if (e.type === 'submit') {
    e.preventDefault();
    console.log(userData);
    e.target.reset();
    localStorage.removeItem('formData');
  }
}

function init() {
  const data = LoadFromLS('formData');

  form.elements.email.value = data?.userEmail || '';
  form.elements.message.value = data?.userMessage || '';
}
