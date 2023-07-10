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
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #d88d02;
  color: #d88d02;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 5px 5px 6px 0px #000000;

  &:active {
    box-shadow: 3px 3px 3px 0px #000, inset 2px 3px 8px 0px #3e3d3d,
      5px 5px 4px -1px rgba(0, 0, 0, 0);
    color: #ca8504;
    border-color: #ae7305;
  }
  &:hover {
    background-color: #e1e1e1;
  }
`;

export const Text = styled.p`
  color: #ffffff;
`;

export const LogIn = styled(SignUp)`
  margin-right: 0;
  margin-left: 48px;
`;

export const LetsGo = styled(SignUp)`
  margin: 0 auto;
`;
