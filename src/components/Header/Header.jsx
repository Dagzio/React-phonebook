import Navigation from 'components/Navigation/Navigation';
import { Headerbar, HeaderLink } from './Header.styled';

const Header = () => {
  return (
    <Headerbar>
      <HeaderLink to={'/'}>Home</HeaderLink>

      <HeaderLink to={'contacts'}>My Contacts</HeaderLink>

      <Navigation />
    </Headerbar>
  );
};

export default Header;
