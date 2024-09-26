// good-vs-evil
// https://www.codewars.com/kata/52761ee4cffbc69732000738

const goodValues = [1, 2, 3, 3, 4, 10];
const evilValues = [1, 2, 2, 2, 3, 5, 10];

const evaluating = (count, values) => count.split(" ")
  .reduce((a, c, i) => a + Number(c) * values[i], 0);

const goodVsEvil = (good, evil) => {
  const goodSum = evaluating(good, goodValues);
  const evilsum = evaluating(evil, evilValues);
  
  let result = 'No victor on this battle field';
  if (goodSum > evilsum) {
    result = 'Good triumphs over Evil';
  }
  if (goodSum < evilsum) {
    result = 'Evil eradicates all trace of Good';
  }
  
  return `Battle Result: ${result}`;
};


console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') === 'Battle Result: Evil eradicates all trace of Good', 'Evil should win');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') === 'Battle Result: Good triumphs over Evil', 'Good should win');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') === 'Battle Result: No victor on this battle field', 'Should be a tie');
