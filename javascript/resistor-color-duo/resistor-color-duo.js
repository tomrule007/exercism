//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import { colorCode } from '../resistor-color/resistor-color.js';
export const value = colors =>
  Number(
    colors
      .slice(0, 2)
      .map(colorCode)
      .join('')
  );
