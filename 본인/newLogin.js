const loginform = document.querySelector('#login-form')
const logininput = document.querySelector('#login-form input')


function onSubmit(e) {
  e.preventDefault();
  localStorage.setItem('usename', logininput.value);
}

loginform.addEventListener('submit', onSubmit);