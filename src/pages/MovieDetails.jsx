import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

import { fetchMovieDetails } from '../helpers/apiService';
import { Loader, MovieCard } from 'components';

const MovieDetails = () => {
  const [detailsMovie, setDetailsMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieDetails(movieId);
        setDetailsMovie(response);
      } catch (error) {
        console.log(error.message);
        navigate('/', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId, navigate]);

  return (
    <section>
      <BackButtonBox>
        <Link to={backLinkHref}>Go back</Link>
      </BackButtonBox>

      {isLoading && <Loader />}

      {detailsMovie && (
        <MovieCard detailsMovie={detailsMovie} location={backLinkHref} />
      )}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </section>
  );
};

const BackButtonBox = styled.div`
  font-size: 24px;
  font-weight: 500;

  margin-bottom: 15px;
  margin-left: 22px;
  color: black;
  text-decoration: none;

  :hover {
    color: blue;
  }
`;

export default MovieDetails;
