// every-possible-sum-of-two-digits
// Every possible sum of two digits
// difficulty: 7kyu
// https://www.codewars.com/kata/5b4e474305f04bea11000148
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/every-possible-sum-of-two-digits

const digits = (num) => [].concat(
  ...[...String(num)].map(Number)
    .map((v, i, arr) => {
        return arr.slice(i + 1).map((v2) => v + v2);
      }
    )
);


console.log(digits(156), [6, 7, 11]);
console.log(digits(81596), [9, 13, 17, 14, 6, 10, 7, 14, 11, 15]);
console.log(digits(3852), [11, 8, 5, 13, 10, 7]);
console.log(digits(3264128), [5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10]);
console.log(digits(999999), [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]);
