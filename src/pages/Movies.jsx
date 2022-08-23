import { useState, useEffect } from 'react';
import { Loader, MoviesGallery, SearchBar } from 'components';
import { toast } from 'react-toastify';

import { fetchSearchMovie } from 'helpers/apiService';
import { useSearchParams } from 'react-router-dom';

const optionsNotify = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function Movies() {
  // const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const searchParam = searchParams.get('query');

  useEffect(() => {
    const getSearchMovies = async () => {
      if (!searchParam) return;

      setIsLoading(true);
      try {
        const response = await fetchSearchMovie(searchParam);

        if (response.total_results === 0) {
          toast.info(
            `Searching did not find anything. Try again`,
            optionsNotify
          );
          return;
        }
        setSearchMovies(response.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchMovies();
  }, [searchParam]);

  const handleSubmit = newQuery => {
    setSearchParams(newQuery !== '' ? { query: newQuery } : {});
    // setQuery(searchParam);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {searchMovies.length > 0 && <MoviesGallery movies={searchMovies} />}
    </>
  );
}

export default Movies;
