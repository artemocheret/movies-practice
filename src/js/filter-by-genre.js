export const filteredByGenre = (currentGenre, films) => {
  const filteredFilms = films.filter((film) =>
    film.genre.includes(currentGenre),
  );
  return filteredFilms;
};
