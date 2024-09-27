// sum-of-a-sequence
// Sum of a sequence
// difficulty: 7kyu
// https://www.codewars.com/kata/586f6741c66d18c22800010a/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/sum-of-a-sequence

const sequenceSum = (begin, end, step, sum = 0) => {
  while (begin <= end) {
    sum += begin;
    begin += step;
  }
  
  return sum;
};


console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);
