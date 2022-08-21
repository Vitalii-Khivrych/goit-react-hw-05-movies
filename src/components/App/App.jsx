import { Routes, Route } from 'react-router-dom';

import { Cast, Layout } from 'components';

import { Home, MovieDetails, Movies } from 'pages';

// import { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import api from '../../helpers/apiService';

// import { AppWrap } from './App.styled';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="home" element={<div>Home</div>} /> */}
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<div>MovieReviews</div>} />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
}
