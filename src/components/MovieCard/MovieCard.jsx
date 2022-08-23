import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai';

import defaultPoster from '../../images/no-poster.jpg';
import {
  Container,
  CardImage,
  Box,
  CardTitle,
  CardText,
  SecondCardTitle,
  LinkWrap,
  CardLink,
} from './MovieCard.styled';

export function MovieCard({ detailsMovie, location }) {
  const {
    title,
    poster_path,
    overview,
    vote_average,
    genres = [],
  } = detailsMovie;

  // console.log(location);

  const userScore = Math.round((vote_average / 10) * 100);
  const getGenres = genres.map(({ name }) => name).join(', ');

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultPoster;

  return (
    <>
      <Container>
        <CardImage src={imgUrl} alt={title} />
        <Box>
          <CardTitle>{title}</CardTitle>
          <CardText>User score: {userScore}%</CardText>
          <SecondCardTitle>Overview</SecondCardTitle>
          <CardText>{overview}</CardText>
          <SecondCardTitle>Genres</SecondCardTitle>
          <CardText>{getGenres}</CardText>
        </Box>
      </Container>
      <LinkWrap>
        <SecondCardTitle>Additional Information</SecondCardTitle>
        <CardLink to="cast" state={{ from: location }}>
          Cast
          <AiOutlineArrowDown
            style={{
              fontSize: '22',
              marginLeft: '6px',
              verticalAlign: 'middle',
            }}
          />
        </CardLink>
        <CardLink to="reviews" state={{ from: location }}>
          Reviews
          <AiOutlineArrowDown
            style={{
              fontSize: '22',
              marginLeft: '6px',
              verticalAlign: 'middle',
            }}
          />
        </CardLink>
      </LinkWrap>
    </>
  );
}

MovieCard.propTypes = {
  detailsMovie: PropTypes.object,
  // location: PropTypes.object.isRequired,
};
