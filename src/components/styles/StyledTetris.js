import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2e2e2e;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 100rem;

  aside {
    width: 100%;
    max-width: 12rem;
    display: block;
    padding: 0 2rem;
  }
`;
