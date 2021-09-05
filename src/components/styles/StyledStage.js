import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);

  width: 100%;
  max-width: 25vw;
  background: #000;
  box-shadow: 5px 5px 10px #1d1d1d, -5px -5px 10px #3f3f3f;
`;
