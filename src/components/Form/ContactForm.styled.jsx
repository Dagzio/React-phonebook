import styled from 'styled-components';

export const CurrentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 12px 8px;
  width: 320px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #e4e4e4;
  box-shadow: 5px 5px 6px 0px #000000;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 180px;
  margin-bottom: 20px;
  padding: 2px 4px;
  height: 24px;
  font-size: 14px;
  border-radius: 3px;
  outline: none;
  border:none;
  box-shadow: 1px 1px 2px 0px #5e5e5e;
  &:focus{
    border: 2px solid #df960e;
  }
`;

export const Button = styled.button`
width 112px;
border-radius: 6px;
padding: 4px 12px;
cursor: pointer;
border: transparent;
background-color: #df960e;
outline: 1px solid black;
font-weight: 600;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
&:active{
  box-shadow: 1px 1px 1px 0px #000000, inset 4px 4px 4px 0px #3e3e3e, 5px 5px 4px -2px rgba(0, 0, 0, 0);
}
`;
