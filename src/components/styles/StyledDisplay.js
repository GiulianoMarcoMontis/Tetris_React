import styled, { css } from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  margin: 0 0 1.2rem 0;
  padding: 1.4rem 1.2rem 1.2rem 1.2rem;

  min-height: 1.8rem;
  width: 100%;

  color: ${(props) => (props.gameOver ? 'purple' : '#999')};

  ${(props) =>
    props.gameOver &&
    css`
      display: flex;
      align-items: center;
    `};

  border: 0.1rem solid #3e3e3e;
  border-radius: 1rem;

  background: #2e2e2e;
  box-shadow: 5px 5px 10px #1d1d1d, -5px -5px 10px #3f3f3f;

  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;
