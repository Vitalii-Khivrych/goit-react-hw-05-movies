// import PropTypes from 'prop-types'

import { fetchMovieReviews } from 'helpers/apiService';
import { useFetch } from 'hooks/useFetch';

import { useParams } from 'react-router-dom';

export function Reviews(props) {
  const { movieId } = useParams();

  const { value: reviews } = useFetch(fetchMovieReviews, movieId);

  console.log(reviews);

  if (reviews.length === 0) {
    return <div>No reviews</div>;
  }

  return (
    <div>
      {reviews.map(({ id, author, content }) => (
        <div key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
}

// Reviews.propTypes = {}
