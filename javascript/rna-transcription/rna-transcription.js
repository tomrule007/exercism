export const toRna = dnaString => {
  const dnaToRna = dnaChar =>
    ({
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    }[dnaChar]);

  return dnaString
    .split('')
    .map(dnaToRna)
    .join('');
};
