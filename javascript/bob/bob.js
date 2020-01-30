export const hey = message => {
  const messageHas = regex => regex.test(message);

  if (message === '' || messageHas(/^\s+$/)) return 'Fine. Be that way!';

  // Ends with a question mark
  if (messageHas(/\?\s*$/)) {
    // Has no lowercase letters and ends with a question mark
    if (messageHas(/^[A-Z ]+\?$/)) return "Calm down, I know what I'm doing!";

    return 'Sure.';
  }
  // Ends with exclamation mark
  if (messageHas(/!$/)) {
    // Ends with exclamation mark following a lowercase word
    if (messageHas(/[a-z]+!$/)) return 'Whatever.';

    return 'Whoa, chill out!';
  }
  if (messageHas(/^[A-Z ]+$/)) return 'Whoa, chill out!';

  return 'Whatever.';
};
