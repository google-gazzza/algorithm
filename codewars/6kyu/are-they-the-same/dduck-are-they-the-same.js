// https://www.codewars.com/kata/550498447451fbbd7600041c
const comp = (array1 = [], array2 = []) => {
  if (!array1 || !array2) {
    return false;
  }
  const asc = (a, b) => a - b;
  array1.sort(asc);
  array2.sort(asc);
  return array1.every((v, index) => v ** 2 === array2[index]);
};

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2), true);

const arr2 = [];
const arr3 = [];
console.log(comp(arr2, arr3), true);
