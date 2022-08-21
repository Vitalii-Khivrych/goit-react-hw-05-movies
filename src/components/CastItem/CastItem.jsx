import PropTypes from 'prop-types';

import defaultPoster from '../../images/no-poster.jpg';

export function CastItem({ character, name, profile_path }) {
  const imgUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : defaultPoster;

  return (
    <div>
      <img src={imgUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Character: {character}</p>
      </div>
    </div>
  );
}

// CastItem.propTypes = {}
