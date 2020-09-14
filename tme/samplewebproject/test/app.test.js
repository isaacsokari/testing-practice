const render = require('../../render');

const assert = require('assert');

it('has a text input', async () => {
  const dom = await render('index.html');

  const input = dom.window.document.querySelector('input');

  assert.strictEqual(input.type, 'text', 'Document should have a text input');
});

it('shows a success message with a valid email', async () => {
  const dom = await render('index.html');

  const input = dom.window.document.querySelector('input');
  input.value = 'sadfasfdasfhas@asdf.asdf';

  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'));

  const header = dom.window.document.querySelector('h1');

  assert.strictEqual(
    header.innerText,
    'Valid Email',
    'Header Value on correct submission should be "Valid Email"!'
  );
});

it('shows an error message with an invalid email', async () => {
  const dom = await render('index.html');

  const input = dom.window.document.querySelector('input');
  input.value = 'sadfasfdasfhasasdf.asdf';

  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'));

  const header = dom.window.document.querySelector('h1');

  assert.strictEqual(
    header.innerText,
    'Invalid Email',
    'Header Value on incorrect submission should be "Invalid Email"!'
  );
});
