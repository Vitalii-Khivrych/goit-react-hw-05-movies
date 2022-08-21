import { MoviesGallery } from 'components';

import { fetchTrending } from '../../helpers/apiService';
import { useFetch } from '../../hooks/useFetch';

export const Home = () => {
  const { value } = useFetch(fetchTrending);

  return (
    <>
      <h2>Trending today</h2>
      {value && <MoviesGallery movies={value} />}
    </>
  );
};
