import { Link, Outlet, useParams } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import { fetchMovieDetails } from '../../helpers/apiService';
import { Loader, MovieCard } from 'components';

export const MovieDetails = () => {
  // const navigate = useNavigate();
  // navigate('/404', { replace: true });

  const { movieId } = useParams();

  const {
    value: detailsMovie,
    error,
    isLoading,
  } = useFetch(fetchMovieDetails, movieId);

  return (
    <section>
      <div
        style={{
          marginBottom: '60px',
          color: '#f2f2f2',
          letterSpacing: '0.06em',
          textDecoration: 'underline',
          borderColor: 'gray',
        }}
      >
        <Link to="/">Back to Countries</Link>
      </div>

      {isLoading && <Loader />}

      {!error && <MovieCard detailsMovie={detailsMovie} />}

      {error && <p> Error - {error.message} </p>}

      <Outlet />
    </section>
  );
};
