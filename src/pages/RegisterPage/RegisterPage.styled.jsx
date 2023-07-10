import { styled } from 'styled-components';

export const RegisterForm = styled.form`
  width: 300px;
  display: inline-block;
`;

export const NameInput = styled.input`
  width: 100%;
  padding: 8px;
  height: 40px;
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  margin-bottom: 12px;
  border: none;
  box-shadow: 5px 5px 6px 0px #000000;
  &:focus {
    border: 2px solid #d88d02;
  }
`;

export const EmailInput = styled(NameInput)``;

export const PasswordInput = styled(NameInput)`
  margin-bottom: 16px;
`;

export const SignUp = styled.button`
  width: 100%;
  padding: 5px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  background-color: #f09d02;
  border: none;
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 5px 5px 6px 0px #000000;
  &:hover {
    background-color: #d88d02;
  }
  &:active {
    box-shadow: inset 14px 14px 10px -6px rgba(0, 0, 0, 0.47);
  }
`;

export const RegisterLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;
