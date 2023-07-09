import { styled } from 'styled-components';

export const RegisterForm = styled.form`
  width: 300px;
`;

export const UserName = styled.input`
  width: 100%;
  padding: 5px;
  height: 40px;
  border-radius: 3px;
  margin: 5px 0;
  outline: none;
`;

export const UserEmail = styled(UserName)``;

export const UserPassword = styled(UserName)``;

export const SignUp = styled.button`
  width: 100%;
  padding: 5px;
  height: 40px;
  border-radius: 3px;
  margin: 5px 0;
  outline: none;
  background-color: #e6b333;
  border: none;
  color: white;
  text-align: center;
  font-size: 0.8em;
  cursor: pointer;
`;
