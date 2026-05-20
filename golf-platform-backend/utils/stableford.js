export const calculateStableford = (holes) => {
  let totalPoints = 0;

  holes.forEach(({ par, strokes }) => {
    const diff = strokes - par;

    if (diff <= -3) totalPoints += 5;
    else if (diff === -2) totalPoints += 4;
    else if (diff === -1) totalPoints += 3;
    else if (diff === 0) totalPoints += 2;
    else if (diff === 1) totalPoints += 1;
    else totalPoints += 0;
  });

  return totalPoints;
};