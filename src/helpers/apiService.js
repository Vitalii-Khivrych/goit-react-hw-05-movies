import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '81f57ce8a5863d84fdab7c29ba0c37c2';

// const options = {
//   params: {
//     key: KEY,
//     q: null,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     page: null,
//     per_page: 12,
//   },
// };

export async function fetchTrending() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}`;

  const { data } = await axios.get(url);
  return data;
}

// async fetchTrending() {
//     const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${this.page}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

//  async fetchMoviesByFilters() {
//     const url = `${BASE_URL}/discover/movie?api_key=${KEY}&language=en-US&primary_release_year=${this.year}&with_genres=${this.genre}&page=${this.page}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

//   async fetchGenres() {
//     const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}&language=en-US`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

//

//   async fetchSearchMovie() {
//     const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

//   async fetchMovieDetails(movieId) {
//     const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }
