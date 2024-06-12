// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
// [JS][6kyu] Are they the "same"?
// are-they-the-same
const comp = (array1, array2) => {
  if (!array1 || !array2) {
    return false;
  }
  const numMap = new Map();
  array1.forEach((num) => {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  });
  const array2Len = array2.length;
  for (let i = 0; i < array2Len; i += 1 || 0) {
    const num = Math.sqrt(array2[i]);
    const count = numMap.get(num) || 0;
    if (count === 0) {
      return false;
    }
    numMap.set(num, count - 1);
  }
  return true;
};

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
comp(a1, a2) === true;
comp(
  [9, 3, 0, 0, 7, 0, 2, 5, 9, 1, 3, 4, 8, 9, 2],
  [1, 81, 25, 64, 0, 16, 1, 4, 0, 81, 4, 81, 9, 9, 49]
);
