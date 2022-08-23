import { MoviesGallery } from 'components';
import styled from 'styled-components';

import { fetchTrending } from '../helpers/apiService';
import { useFetch } from '../hooks/useFetch';

const Home = () => {
  const { value } = useFetch(fetchTrending);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      {value && <MoviesGallery movies={value} />}
    </>
  );
};

const HomeTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 16px;
  text-align: center;
`;

export default Home;
