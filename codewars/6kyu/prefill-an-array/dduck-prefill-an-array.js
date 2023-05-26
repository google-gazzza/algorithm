// prefill-an-array
// Prefill an Array
// https://www.codewars.com/kata/54129112fb7c188740000162
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/prefill-an-array

const prefill = (n, v) => {
  if (typeof n === 'boolean' || !Number.isInteger(Number(n)) || Number(n) < 0) {
    throw new TypeError(`${n} is invalid`);
  }
  
  return [...'a'.repeat(Number(n))].map(() => v);
};

console.log(prefill(3, 1), [1, 1, 1]);
console.log(prefill(2, 'abc'), ['abc', 'abc']);
console.log(prefill('1', 1), [1]);
console.log(prefill(3, prefill(2, '2d')), [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
