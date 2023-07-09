import {
  HomePageBlock,
  HomePageButtons,
  HomePageTitle,
  LogIn,
  SignUp,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageBlock>
      <HomePageTitle>Welcome to your contacts book</HomePageTitle>
      <HomePageButtons>
        <SignUp type="button">Sign Up</SignUp>
        <p>or</p>
        <LogIn type="button">Log In</LogIn>
      </HomePageButtons>
    </HomePageBlock>
  );
};

export default HomePage;
