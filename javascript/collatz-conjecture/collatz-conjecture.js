export const steps = n => {
  if (n <= 0) throw new Error('Only positive numbers are allowed');

  let currentN = n;
  let stepCount = 0;

  while (currentN !== 1) {
    currentN =
      currentN % 2
        ? 3 * currentN + 1 // odd -> 3x+1
        : currentN / 2; // Even -> n / 2

    stepCount++;
  }
  return stepCount;
};
