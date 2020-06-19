//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  const wordRegEx = /[a-z]+/gi;
  return phrase
    .match(wordRegEx)
    .map((word) => word[0])
    .join('');
};
