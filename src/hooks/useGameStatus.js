import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  // Points in order for 1, 2, 3, 4+ rows cleared at the same time
  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    // if any rows got cleared than we have points ...
    if (rowsCleared > 0) {
      // tetris formula to calc scores
      // use the index from linePoints to get the points based on the lined cleared
      setScore((prev) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
    }
    // calculate every time some change in below happens
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
