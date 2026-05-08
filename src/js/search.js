export const searchFilm = (query, movies) => {
  const moviesFilter = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query) ||
      movie.description.toLowerCase().includes(query),
  );
  return moviesFilter;
};
