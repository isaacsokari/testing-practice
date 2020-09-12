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

it('after input, dropdown shows up', () => {
  document.querySelector('input').value = 'avengers';

  document.querySelector('input').dispatchEvent(new Event('input'));

  const dropdown = document.querySelector('.dropdown');
  console.log(dropdown.className);
  expect(dropdown.className).to.include('is-active');
});
