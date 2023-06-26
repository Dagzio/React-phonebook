import Navigation from 'components/Navigation/Navigation';
import { Headerbar, HeaderLink } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const Header = () => {
  const stateIsLoggedIn = useSelector(selectIsLoggedIn);
  console.log(stateIsLoggedIn);
  return (
    <Headerbar>
      <HeaderLink to={'/'}>Home</HeaderLink>

      <HeaderLink to={'contacts'}>My Contacts</HeaderLink>

      <Navigation />

      {stateIsLoggedIn && (
        <div>
          <p>Hello, </p>
          <button type="button">Log Out</button>
        </div>
      )}
    </Headerbar>
  );
};

export default Header;
