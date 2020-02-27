export const countWords = wordString => {
  const getWords = wordString => wordString.match(/(\w+'\w)|\w+/g);
  const getWordsOccurrences = words =>
    words.reduce((acc, cur) => {
      const curLowerCase = cur.toLowerCase();
      acc[curLowerCase] = (acc[curLowerCase] || 0) + 1;
      return acc;
    }, {});

  return getWordsOccurrences(getWords(wordString));
};
