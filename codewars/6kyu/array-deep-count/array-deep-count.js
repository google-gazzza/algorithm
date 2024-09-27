// array-deep-count
// Array Deep Count
// difficulty: 6kyu
// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

const deepCount = (a) => a.reduce((acc, cur) => {
  if (Array.isArray(cur)) {
    return acc + deepCount(cur) + 1;
  }
  return acc + 1;
}, 0);


console.log(deepCount([]), 0, 'Expected 0');
console.log(deepCount([1, 2, 3]), 3, 'Expected 3');
console.log(deepCount(['x', 'y', ['z']]), 4, 'Expected 4');
console.log(deepCount([1, 2, [3, 4, [5]]]), 7, 'Expected 7');
console.log(deepCount([[[[[[[[[]]]]]]]]]), 8, 'Expected 8');
