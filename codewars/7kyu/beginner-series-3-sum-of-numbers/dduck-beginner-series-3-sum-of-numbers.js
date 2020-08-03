// beginner-series-3-sum-of-numbers
// Beginner Series #3 Sum of Numbers
// difficulty: 7kyu
// https://www.codewars.com/kata/55f2b110f61eb01779000053
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/beginner-series-3-sum-of-numbers

const getSum = (a, b) => {
  [a, b] = a > b ? [b, a] : [a, b];
  
  let result = 0;
  
  while (a <= b) {
    result += a;
    a++;
  }
  
  return result;
};



console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
