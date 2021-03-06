const waitFor = (selector) => {
  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        resolve();
      }
    }, 50);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      reject();
    }, 3000);
  });
};

beforeEach(() => {
  document.querySelector('#target').innerHTML = '';

  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Avengers' },
        { Title: 'Not Avengers' },
        { Title: 'Also Not Avengers' },
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
});

it('dropdown is not active on page load', () => {
  const dropdown = document.querySelector('.dropdown');

  expect(dropdown.className).to.not.include('is-active');
});

it('after input, dropdown shows up', async () => {
  const input = document.querySelector('input');
  input.value = 'avengers';
  input.dispatchEvent(new Event('input'));

  await waitFor('.dropdown-item');

  const dropdown = document.querySelector('.dropdown');
  expect(dropdown.className).to.include('is-active');
});

it('number of movies returned', async () => {
  const input = document.querySelector('input');
  input.value = 'avengers';
  input.dispatchEvent(new Event('input'));

  await waitFor('.dropdown-item');

  const item = document.querySelectorAll('.dropdown-item');
  expect(item).to.have.lengthOf(3);
});
