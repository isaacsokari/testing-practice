const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { value } = input;
  const header = document.querySelector('h1');

  if (value.includes('@')) {
    header.innerText = 'Valid Email';
  } else {
    header.innerText = 'Invalid Email';
  }
});

window.scriptLoaded = true;
