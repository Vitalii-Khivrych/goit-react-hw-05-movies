import PropTypes from 'prop-types';

import {
  ItemContainer,
  CastTitle,
  CastText,
  CastImage,
} from './CastItem.styled';
import defaultPoster from '../../images/no-poster.jpg';

export function CastItem({ character, name, profile_path }) {
  const imgUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : defaultPoster;

  return (
    <ItemContainer>
      <CastImage src={imgUrl} alt={name} />
      <div>
        <CastTitle>{name}</CastTitle>
        <CastText>Character: {character}</CastText>
      </div>
    </ItemContainer>
  );
}

CastItem.propTypes = {
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};
