import Navigation from 'components/Navigation/Navigation';
import { Headerbar, HeaderLink } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectCurrentUser } from 'redux/selectors';
import { userLogOut } from 'redux/userOperations';

const Header = () => {
  const stateIsLoggedIn = useSelector(selectIsLoggedIn);
  const stateCurrentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch();

  return (
    <Headerbar>
      <HeaderLink to={'/'}>Home</HeaderLink>

      <HeaderLink to={'contacts'}>My Contacts</HeaderLink>

      

      {stateIsLoggedIn ?  (
        <div>
          <p>Hello, {stateCurrentUser.email}</p>
          <button type="button" onClick={() => dispatch(userLogOut())}>Log Out</button>
        </div>
      ): <Navigation />}
    </Headerbar>
  );
};

export default Header;
