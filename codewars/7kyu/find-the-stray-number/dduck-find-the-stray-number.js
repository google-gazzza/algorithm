// find-the-stray-number
// Find the stray number
// https://www.codewars.com/kata/57f609022f4d534f05000024/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/find-the-stray-number

const stray = (numbers) => {
  const [a, b] = [...new Set(numbers)];
  return numbers.indexOf(a) === numbers.lastIndexOf(a) ? a : b;
};



console.log(stray([1, 1, 2]), 2);
