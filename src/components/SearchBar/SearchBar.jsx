import { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Button, Input } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <Header onSubmit={handleSubmit}>
      <Form>
        <Button type="submit">
          <BsSearch />
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value.trim())}
        />
      </Form>
    </Header>
  );
}

// export class OldSearchBar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = e => {
//     this.setState({ query: e.target.value.trim() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.query);
//     this.setState({
//       query: '',
//     });
//   };

//   render() {
//     const { query } = this.state;

//     return (
//       <Header onSubmit={this.handleSubmit}>
//         <Form>
//           <Button type="submit">
//             <BsSearch />
//           </Button>

//           <Input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={query}
//             onChange={this.handleChange}
//           />
//         </Form>
//       </Header>
//     );
//   }
// }

SearchBar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
