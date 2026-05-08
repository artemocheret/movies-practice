import movies from "./data.js";
import { filteredByGenre } from "./filter-by-genre.js";
import { renderMovies } from "./render.js";
import { searchFilm } from "./search.js";
import { sortedMovies } from "./sorted.js";
const moviesContainer = document.querySelector("[data-movies]");
renderMovies(movies, moviesContainer);

const inputSearchFilm = document.querySelector("[data-search]");
const handleSearchFilm = (event) => {
  const query = event.target.value.toLowerCase();
  const searchedFilm = searchFilm(query, movies);
  renderMovies(searchedFilm, moviesContainer);
};

inputSearchFilm.addEventListener("input", handleSearchFilm);

const buttonFilterByGenre = document.querySelector("[data-filter]");
const handleFilter = (event) => {
  const currentUserGenre = event.target.dataset.ganre;
  const filteredGenre = filteredByGenre(currentUserGenre, movies);
  renderMovies(filteredGenre, moviesContainer);
};

buttonFilterByGenre.addEventListener("click", handleFilter);

const sortSelect = document.querySelector("[data-sort]");
const handleSort = (event) => {
  const query = event.target.value;
  const sortedFilms = sortedMovies(query, movies);
  renderMovies(sortedFilms, moviesContainer);
};

sortSelect.addEventListener("change", handleSort);
