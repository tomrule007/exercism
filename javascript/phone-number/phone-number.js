export const clean = phoneNumberString => {
  if (/[a-z]/i.test(phoneNumberString))
    throw new Error('Letters not permitted');
  if (/[^0-9\+\(\)\-\.\s]/i.test(phoneNumberString))
    throw new Error('Punctuations not permitted');

  let cleanNumber = phoneNumberString.match(/\d+/g).join('');

  if (cleanNumber.length < 10) throw new Error('Incorrect number of digits');
  if (cleanNumber.length > 11) throw new Error('More than 11 digits');

  //Remove country code if valid
  if (cleanNumber.length === 11) {
    if (cleanNumber.charAt(0) !== '1')
      throw new Error('11 digits must start with 1');

    cleanNumber = cleanNumber.substring(1);
  }

  const areaCode = cleanNumber.slice(0, 3);
  if (cleanNumber.charAt(0) === '0')
    throw new Error('Area code cannot start with zero');
  if (areaCode.charAt(0) === '1')
    throw new Error('Area code cannot start with one');

  const exchangeCode = cleanNumber.slice(3, 6);
  if (exchangeCode.charAt(0) === '0')
    throw new Error('Exchange code cannot start with zero');
  if (exchangeCode.charAt(0) === '1')
    throw new Error('Exchange code cannot start with one');

  return cleanNumber;
};
