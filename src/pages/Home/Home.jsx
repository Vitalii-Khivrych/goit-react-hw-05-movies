import { MoviesGallery } from '../../components';
// import { useState, useEffect } from 'react';
import { fetchTrending } from '../../helpers/apiService';
import { useFetch } from '../../hooks/useFetch';

export const Home = () => {
  const { value } = useFetch(fetchTrending);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesGallery movies={value} />
    </>
  );
};
