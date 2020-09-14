const render = require('../../render');

const assert = require('assert');

it('has a text input', async () => {
  const dom = await render('index.html');

  // console.log(dom);

  const input = dom.window.document.querySelector('input');

  assert.strictEqual(input.type, 'submit', 'Document should have a text input');
});
