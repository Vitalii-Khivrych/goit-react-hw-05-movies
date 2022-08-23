import { useEffect, useState } from 'react';

export const useFetch = (fetch, searchId) => {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(searchId);

        const getValue = response.results || response.cast || response;
        setValue(getValue);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [fetch, searchId]);

  return { value, isLoading };
};
