import { styled } from 'styled-components';

export const Main = styled.main`
  min-height: 70vh;
  padding: 0 8px 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1f25;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.68),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 90px;
`;
