export const age = (planet, ageInSeconds) => {
  const SECONDS_IN_YEAR = 31557600;
  const ORBITAL_PERIODS_IN_YEARS = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };
  return (
    Math.round(
      (ageInSeconds / (ORBITAL_PERIODS_IN_YEARS[planet] * SECONDS_IN_YEAR)) *
        100
    ) / 100
  );
};
