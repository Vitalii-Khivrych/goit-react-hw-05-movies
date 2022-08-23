import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'helpers/apiService';
import { CastItem, Loader } from 'components';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  // const { value: movieCast } = useFetch(fetchMovieCast, movieId);

  useEffect(() => {
    const getCastMovie = async () => {
      setIsLoading(true);

      try {
        const response = await fetchMovieCast(movieId);
        setMovieCast(response.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCastMovie();
  }, [movieId]);

  if (movieCast.length === 0 && !isLoading) {
    return (
      <div
        style={{
          fontSize: '24px',
          marginLeft: '20px',
        }}
      >
        No cast
      </div>
    );
  }

  return (
    <CastList>
      {isLoading && <Loader />}
      {movieCast &&
        movieCast.map(({ character, name, profile_path }, index) => (
          <CastItem
            key={index}
            character={character}
            name={name}
            profile_path={profile_path}
          />
        ))}
    </CastList>
  );
};

export default Cast;
