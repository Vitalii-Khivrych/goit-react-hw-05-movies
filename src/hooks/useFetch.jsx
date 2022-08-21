import { useEffect, useState } from 'react';

export const useFetch = (fetch, searchId) => {
  const [value, setValue] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(searchId);
        // console.log(response);

        const getValue = response.results || response.cast || response;

        setValue(getValue);

        // console.log(getValue);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [fetch, searchId]);

  return { value, error, isLoading };
};
