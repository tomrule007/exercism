export const age = (planet, ageInSeconds) => {
  const earthYearInSeconds = 31557600;
  const orbitalPeriod = {
    mercury: 0.2408467 * earthYearInSeconds,
    venus: 0.61519726 * earthYearInSeconds,
    earth: 1 * earthYearInSeconds,
    mars: 1.8808158 * earthYearInSeconds,
    jupiter: 11.862615 * earthYearInSeconds,
    saturn: 29.447498 * earthYearInSeconds,
    uranus: 84.016846 * earthYearInSeconds,
    neptune: 164.79132 * earthYearInSeconds
  };
  return Math.round((ageInSeconds / orbitalPeriod[planet]) * 100) / 100;
};
