import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '81f57ce8a5863d84fdab7c29ba0c37c2';

export async function fetchTrending() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchMovieCast(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchMovieReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchSearchMovie(newQuery) {
  const url = `${BASE_URL}/search/movie/?api_key=${KEY}&query=${newQuery}&language=en-US`;

  const { data } = await axios.get(url);
  return data;
}
