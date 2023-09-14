import { users } from './users.js';
import { messages, getFormData } from './utils.js';

const userRegister = (e) => {
  e.preventDefault();

  const messageForm = document.getElementById('message');
  messageForm.textContent = '';
  //----obtener valores de los input

  const formData = getFormData(e);

  //------- regex
  const validationEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const validationPassword = /^(?=.*\d).{4,8}$/;
  //------ validaciones
  if (!validationEmail.test(formData.email))
    return (messageForm.textContent = messages.emailFormatFail);

  const emailExist = users.some((user) => user.email === formData.email);
  if (emailExist) return (messageForm.textContent = messages.userIsRegister);

  const userNameExist = users.some(
    (user) => user.userName === formData.userName
  );
  if (userNameExist) return (messageForm.textContent = messages.userNameExist);

  const userExist = users.some((user) => user.userName === formData.email);
  if (userExist) return (messageForm.textContent = messages.userIsRegister);

  if (formData.password !== formData.passwordCheck)
    return (messageForm.textContent = messages.passwordMatchFail);

  if (!validationPassword.test(formData.password)) {
    messageForm.textContent = messages.passwordRequirement;
  }

  const newUser = {
    ...formData,
    date: new Date(),
  };

  window.location.href = './login.html';
};

const form = document.getElementById('registerForm');
form.addEventListener('submit', userRegister, false);
