import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components';

import { Home, MovieDetails } from 'pages';

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
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path=":movieId" element={<div>Cast</div>}></Route>
          <Route path="reviews" element={<div>MovieReviews</div>}></Route>
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
}
