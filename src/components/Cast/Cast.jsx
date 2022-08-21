import { CastItem } from 'components';
import { fetchMovieCast } from 'helpers/apiService';
import { useFetch } from 'hooks/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();

  const {
    value: movieCast,
    error,
    isLoading,
  } = useFetch(fetchMovieCast, movieId);

  // useEffect(() => {
  //   const getCastMovie = async () => {
  //     setIsLoading(true);

  //     try {
  //       const response = await fetchMovieCast(movieId);

  //       setMovieCast(response.cast);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   getCastMovie();
  // }, [movieId]);

  return (
    <div>
      {movieCast.map(({ character, name, profile_path }, index) => (
        <CastItem
          key={index}
          character={character}
          name={name}
          profile_path={profile_path}
        />
      ))}
    </div>
  );
};
