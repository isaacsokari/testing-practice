it('it shows an autocomplete', () => {
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

  const dropdown = document.querySelector('.dropdown');

  expect(dropdown.className).to.not.include('is-active');
});
