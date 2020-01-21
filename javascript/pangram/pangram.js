export const isPangram = sentence => {
  if (!sentence) return false;

  const lowerCaseSentence = sentence.toLowerCase();
  const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

  return ALPHABET.every(letter => lowerCaseSentence.includes(letter));
};
