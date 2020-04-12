// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);

twoOldestAges([1, 2, 10, 8]);
//?
