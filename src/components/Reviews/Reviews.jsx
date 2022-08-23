// import PropTypes from 'prop-types'

import { fetchMovieReviews } from 'helpers/apiService';
import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom';
import { ReviewsItem, ReviewsTitle, ReviewsText } from './Reviews.styled';

function Reviews() {
  const { movieId } = useParams();

  const { value: reviews, isLoading } = useFetch(fetchMovieReviews, movieId);

  if (reviews.length === 0 && !isLoading) {
    return (
      <div
        style={{
          fontSize: '24px',
          marginLeft: '20px',
        }}
      >
        No reviews
      </div>
    );
  }

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id}>
          <ReviewsTitle>{author}</ReviewsTitle>
          <ReviewsText>{content}</ReviewsText>
        </ReviewsItem>
      ))}
    </ul>
  );
}

// Reviews.propTypes = {}

export default Reviews;
