import { useNavigate } from 'react-router-dom';
import {
  HomePageBlock,
  HomePageButtons,
  HomePageTitle,
  LetsGo,
  LogIn,
  SignUp,
  Text,
} from './HomePage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const HomePage = () => {
  const navigate = useNavigate();
  const stateLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HomePageBlock>
      <HomePageTitle>Welcome to your contacts book</HomePageTitle>
      {!stateLoggedIn ? (
        <HomePageButtons>
          <SignUp
            type="button"
            onClick={() => {
              navigate('/register');
            }}
          >
            Sign Up
          </SignUp>
          <Text>or</Text>
          <LogIn
            type="button"
            onClick={() => {
              navigate('/login');
            }}
          >
            Log In
          </LogIn>
        </HomePageButtons>
      ) : (
        <LetsGo
          type="button"
          onClick={() => {
            navigate('/contacts');
          }}
        >
          Let's Go
        </LetsGo>
      )}
    </HomePageBlock>
  );
};

export default HomePage;
