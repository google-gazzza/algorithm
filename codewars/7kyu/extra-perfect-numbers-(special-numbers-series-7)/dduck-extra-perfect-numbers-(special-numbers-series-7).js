// https://www.codewars.com/kata/5a662a02e626c54e87000123
// Extra Perfect Numbers (Special Numbers Series #7)

const extraPerfect = (n, step = 1, arr = []) => {
  if (step > n) {
    return arr;
  }
  arr.push(step);
  return extraPerfect(n, step + 2, arr);
};

console.log(extraPerfect(3), [1, 3]);
console.log(extraPerfect(5), [1, 3, 5]);
console.log(extraPerfect(7), [1, 3, 5, 7]);
console.log(extraPerfect(28), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]);
console.log(extraPerfect(39), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]);
