const render = require('../../render');

const assert = require('assert');

it('has a text input', async () => {
  const dom = await render('index.html');

  // console.log(dom);

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
    'Valid email',
    'Header Value on correct submission should be "Valid email"!'
  );
});
