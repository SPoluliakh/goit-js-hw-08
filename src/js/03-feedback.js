import { throttle } from 'lodash';
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[type="email"]');
const textareaEL = document.querySelector('textarea[name="message"]');

formEl.addEventListener('input', throttle(onFormInputField, 500));
formEl.addEventListener('submit', onFormSubmit);
const formDate = {};
saveFormDate();

function onFormSubmit(e) {
  e.preventDefault();
  const formDateValue = localStorage.getItem('feedbackFormState');
  const savedFormDateValue = JSON.parse(formDateValue);
  console.log(savedFormDateValue);
  localStorage.removeItem('feedbackFormState');
  e.target.reset();
}

function onFormInputField(e) {
  formDate[e.target.name] = e.target.value;

  localStorage.setItem('feedbackFormState', JSON.stringify(formDate));
}

function saveFormDate() {
  const currentDate = localStorage.getItem('feedbackFormState');
  if (currentDate) {
    const formDateValue = localStorage.getItem('feedbackFormState');
    const savedFormDateValue = JSON.parse(formDateValue);

    emailEl.value = savedFormDateValue.email;
    textareaEL.value = savedFormDateValue.message;
  }
}
