import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { GalleryItem, GalleryImg } from './MoviesGalleryItem.styled';

export function MoviesGalleryItem({ posterURL, title, id }) {
  return (
    <GalleryItem>
      <Link to={`movies/${id}`}>
        <GalleryImg
          src={`https://image.tmdb.org/t/p/w500/${posterURL}`}
          alt={title}
        />
        <h3>{title}</h3>
      </Link>
    </GalleryItem>
  );
}

MoviesGalleryItem.propTypes = {
  posterURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
