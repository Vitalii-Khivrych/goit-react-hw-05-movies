import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Form, Button, Input } from './SearchBar.styled';

const optionsNotify = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      toast.info('Sorry, Empty search. Please try again.', optionsNotify);
      return;
    }

    onSubmit(query);

    setQuery('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch />
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={e => setQuery(e.target.value.trim())}
        />
      </Form>
    </Container>
  );
}

SearchBar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
