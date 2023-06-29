import Navigation from 'components/Navigation/Navigation';
import { Headerbar, HeaderLink } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserEmail } from 'redux/selectors';
import { userLogOut } from 'redux/userOperations';

const Header = () => {
  const stateIsLoggedIn = useSelector(selectIsLoggedIn);
  const stateUserEmail = useSelector(selectUserEmail)
  const dispatch = useDispatch();

  return (
    <Headerbar>
      <HeaderLink to={'/'}>Home</HeaderLink>

      <HeaderLink to={'contacts'}>My Contacts</HeaderLink>

      <Navigation />

      {stateIsLoggedIn && (
        <div>
          <p>Hello, {stateUserEmail}</p>
          <button type="button" onClick={() => dispatch(userLogOut())}>Log Out</button>
        </div>
      )}
    </Headerbar>
  );
};

export default Header;
