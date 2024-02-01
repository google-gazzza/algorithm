// unique-in-order
// https://www.codewars.com/kata/54e6533c92449cc251001667

const uniqueInOrder = (iterable) => {
  if (!Array.isArray(iterable)) {
    iterable = iterable.split('');
  }
  
  return iterable.map((v, i, arr) => {
    if (v !== arr[i - 1]) {
      return v;
    }
  })
    .filter((v) => v);
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
