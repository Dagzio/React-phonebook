import { useNavigate } from 'react-router-dom';
import { HeaderLogIn, HeaderSignUp } from './Navigation.styled';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderSignUp
        type="button"
        onClick={() => {
          navigate('/register');
        }}
      >
        Sign Up
      </HeaderSignUp>
      <HeaderLogIn
        type="button"
        onClick={() => {
          navigate('/login');
        }}
      >
        Log in
      </HeaderLogIn>
    </div>
  );
};

export default Navigation;
