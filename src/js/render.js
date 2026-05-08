export const renderMovies = (movies, container) => {
  const movieMarkup = `<ul class = "movie-list">${movies
    .map(
      (film) => `<li class="movie-item">
                <article class="movie">
                  <div class="movie-photo">
                    <img src="${film.poster}" class="movie-img" alt="poster: ${film.title}" />
                  </div>
                  <div class="movie-info">
                    <h2 class="movie-title">${film.title}</h2>
                    <p class="movie-year">${film.year}</p>
                    <p class="movie-description">${film.description}</p>
                    <p class="movie-genre">${film.genre.join(". ")}</p>
                    <p class="movie-rating">${film.rating}</p>
                  </div>
                </article>
              </li>`,
    )
    .join("")}</ul>`;
  if (container) {
    container.innerHTML = movieMarkup;
  }
};
