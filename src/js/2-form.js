const refs = {
  form: document.querySelector('.js-feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormInput(e) {
  console.log(e.currentTarget.message.value);
  console.log(e.currentTarget.email.value);
}

function onFormSubmit(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;

  if (!email.value || !message.value)
    return alert('All form fields must be filled in');

  const userMessage = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  console.log(userMessage);

  e.currentTarget.reset();
}
