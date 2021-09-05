import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);

  border-radius: ${(props) => (props.type === 0 ? '0rem' : '0.2rem')};
  border: ${(props) => (props.type === 0 ? '0rem solid' : '0.1rem solid')};
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`;
