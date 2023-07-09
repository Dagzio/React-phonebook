import { styled } from 'styled-components';

export const HomePageBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HomePageTitle = styled.h1`
  margin-bottom: 24px;
  color: #ffffff;
  text-shadow: 2px 3px 3px #000000;
`;

export const HomePageButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUp = styled.button`
  height: 40px;
  width: 140px;
  margin-right: 48px;
`;

export const LogIn = styled(SignUp)`
  margin-right: 0;
  margin-left: 48px;
`;
