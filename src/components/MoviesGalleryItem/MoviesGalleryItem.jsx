import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import {
  GalleryItem,
  GalleryImg,
  GalleryLink,
  GalleryTitle,
} from './MoviesGalleryItem.styled';
import defaultPoster from '../../images/no-poster.jpg';

export function MoviesGalleryItem({ posterURL, title, id }) {
  const imgUrl = posterURL
    ? `https://image.tmdb.org/t/p/w500${posterURL}`
    : defaultPoster;

  const location = useLocation();

  return (
    <GalleryItem>
      <GalleryLink to={`/movies/${id}`} state={{ from: location }}>
        <GalleryImg src={imgUrl} alt={title} />
        <GalleryTitle>{title}</GalleryTitle>
      </GalleryLink>
    </GalleryItem>
  );
}

MoviesGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterURL: PropTypes.string,
  title: PropTypes.string.isRequired,
};
