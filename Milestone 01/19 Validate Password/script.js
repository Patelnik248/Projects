const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email.includes('@') && password.length >= 8) {
    form.reset();
    message.textContent = 'Valid email and password!';
    message.style.color = 'green';
  } else {
    message.textContent = 'Invalid email or password!';
    message.style.color = 'red';
  }
});
