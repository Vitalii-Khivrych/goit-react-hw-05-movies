// import PropTypes from 'prop-types'
import { useState } from 'react';

import { SearchBar } from 'components';

export function Movies(props) {
  const [query, setQuery] = useState('');

  console.log(query);

  const handleSubmit = newQuery => {
    setQuery(newQuery);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
}

// Movies.propTypes = {}
