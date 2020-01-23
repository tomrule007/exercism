/**
Leap year rules:
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
 */

export const isLeap = year =>
  Boolean(
    (!(year % 4) && // (is divisible by 4 AND
      year % 100) || // not divisible by 100)  OR
      !(year % 400) // is divisible by 400)
  );
