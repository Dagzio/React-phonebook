import { Label } from 'components/Form/ContactForm.styled';
import styled from 'styled-components';

export const Input = styled.input`
  width: 320px;
  padding: 8px;
  height: 28px;
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  border:none;
  margin-bottom: 12px;
  box-shadow: 5px 5px 6px 0px #000000;
  &:focus {
    border: 2px solid #d88d02;
  }
`;

export const FilterLabel = styled(Label)`
  display: inline-block;
  position: relative;
  color: #d88d02;
`;
