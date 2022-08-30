import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input[type="email"]'),
  textareaEL: document.querySelector('textarea[name="message"]'),
};

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);
const formDate = {};
saveFormDate();

function onFormSubmit(e) {
  e.preventDefault();
  const formDateValue = localStorage.getItem('feedbackFormState');
  const savedFormDateValue = JSON.parse(formDateValue);
  console.log(savedFormDateValue);
  removeItemFromLocalStor();
  e.target.reset();
}

function onFormInput(e) {
  formDate[e.target.name] = e.target.value;

  localStorage.setItem('feedbackFormState', JSON.stringify(formDate));
}

function saveFormDate() {
  const currentDate = localStorage.getItem('feedbackFormState');
  const formDateValue = localStorage.getItem('feedbackFormState');
  const savedFormDateValue = JSON.parse(formDateValue);
  if (currentDate) {
    refs.emailEl.value = savedFormDateValue.email;
    refs.textareaEL.value = savedFormDateValue.message;
  }
}

function removeItemFromLocalStor() {
  localStorage.removeItem('feedbackFormState');
}
