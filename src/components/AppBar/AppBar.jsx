import { AiOutlineHome } from 'react-icons/ai';
import { GiFilmStrip } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const navItems = [
  { href: 'home', text: 'Home', icon: AiOutlineHome },
  { href: 'movies', text: 'Movies', icon: GiFilmStrip },
];

export const AppBar = () => {
  return (
    <div>
      {navItems.map(({ href, text, icon: Icon }) => (
        <Link to={href} key={href}>
          <Icon size="20" />
          {text}
        </Link>
      ))}
    </div>
  );
};
