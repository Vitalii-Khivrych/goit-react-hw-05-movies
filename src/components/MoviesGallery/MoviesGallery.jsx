import PropTypes from 'prop-types';
import { MoviesGalleryItem } from 'components';
import { Gallery } from './MoviesGallery.styled';

export function MoviesGallery({ movies, getImg }) {
  return (
    <Gallery>
      {movies.map(({ id, poster_path, title }) => (
        <MoviesGalleryItem
          key={id}
          posterURL={poster_path}
          title={title}
          id={id}
        />
      ))}
    </Gallery>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  largeImageURL: PropTypes.string,
};
