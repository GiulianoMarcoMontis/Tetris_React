import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);
// use React.memo() to re-render only the cells that change when the tetromino moves. Otherwise all cells will be re-rendered every time the tetromino moves.
export default React.memo(Cell);
