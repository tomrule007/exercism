/**
 * Calculate the Hamming Distance between two strands of DNA
 * @param {string} left - left string of dna sequence
 * @param {string} right - right string of dna sequence
 * @return {number} Hamming Distance
 */
export const compute = (left = '', right = '') => {
  if (left.length === 0 && right.length === 0) return 0;
  if (left.length === 0) throw new Error('left strand must not be empty');
  if (right.length === 0) throw new Error('right strand must not be empty');
  if (left.length !== right.length)
    throw new Error('left and right strands must be of equal length');

  const leftChars = left.split('');
  const rightChars = right.split('');

  const hammingDistance = leftChars.reduce(
    (differenceCountAccumulator, curChar, curIndex) =>
      curChar === rightChars[curIndex]
        ? differenceCountAccumulator
        : ++differenceCountAccumulator,
    0
  );
  return hammingDistance;
};
