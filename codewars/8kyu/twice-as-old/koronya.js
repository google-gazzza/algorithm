// [JS][8kyu] Twice as old
// twice-as-old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - 2 * sonYearsOld);

twiceAsOld(36, 7) === 22;
twiceAsOld(55, 30) === 5;
twiceAsOld(42, 21) === 0;
twiceAsOld(22, 1) === 20;
twiceAsOld(29, 0) === 29;
