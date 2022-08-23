import { AiOutlineHome } from 'react-icons/ai';
import { GiFilmStrip } from 'react-icons/gi';
import { AppNav, AppLink } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home', icon: AiOutlineHome },
  { href: 'movies', text: 'Movies', icon: GiFilmStrip },
];

export const AppBar = () => {
  return (
    <AppNav>
      {navItems.map(({ href, text, icon: Icon }) => (
        <AppLink to={href} key={href}>
          <Icon
            style={{
              fontSize: '20',
              marginRight: '8px',
              // verticalAlign: 'middle',
            }}
          />
          {text}
        </AppLink>
      ))}
    </AppNav>
  );
};
