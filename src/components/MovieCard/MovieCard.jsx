// import PropTypes from 'prop-types';
// import defaultPoster from '../../images/no-poster.jpg';
import { Link } from 'react-router-dom';

export function MovieCard({ detailsMovie }) {
  const {
    title,
    poster_path,
    overview,
    vote_average,
    genres = [],
  } = detailsMovie;
  // console.log(detailsMovie);

  const userScore = Math.round((vote_average / 10) * 100);
  const getGenres = genres.map(({ name }) => name).join(', ');

  // if (!poster_path) return;

  // const imgUrl = poster_path
  //   ? `https://image.tmdb.org/t/p/w500/${poster_path}`
  //   : defaultPoster;

  //

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>User score: {userScore}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{getGenres}</p>
        <div>
          <h2>Additional Information</h2>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
      </div>
    </div>
  );
}

// MovieCard.propTypes = {};
