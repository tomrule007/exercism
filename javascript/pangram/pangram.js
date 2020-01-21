export const isPangram = sentence => {
  if (!sentence) return false;

  const lowerCaseSentence = sentence.toLowerCase();

  return [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ].every(letter => lowerCaseSentence.includes(letter));
};
