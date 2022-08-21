import { AiOutlineHome } from 'react-icons/ai';
import { GiFilmStrip } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home', icon: AiOutlineHome },
  { href: 'movies', text: 'Movies', icon: GiFilmStrip },
];

export const AppBar = () => {
  return (
    <div>
      {navItems.map(({ href, text, icon: Icon }) => (
        <NavLink to={href} key={href}>
          <Icon size="20" />
          {text}
        </NavLink>
      ))}
    </div>
  );
};
