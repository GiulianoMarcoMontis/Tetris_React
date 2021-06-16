import styled from 'styled-components';

export const StyledStartButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 1.2rem 0;
  padding: 1.4rem 1.2rem 1.2rem 1.2rem;
  min-height: 1.8rem;
  width: 100%;

  color: white;

  border-radius: 1rem;
  border: 0.1rem solid #3e3e3e;
  background: linear-gradient(145deg, #313131, #292929);
  box-shadow: 5px 5px 10px #1d1d1d, -5px -5px 10px #3f3f3f;

  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  :hover {
    //color: black;
    background: #3e3e3e;
    box-shadow: 5px 5px 10px #272727, -5px -5px 10px #555555;
  }

  :active {
    color: goldenrod;
    box-shadow: inset 5px 5px 10px #1d1d1d, inset -5px -5px 10px #3f3f3f;
  }
`;
