// sum-of-the-first-nth-term-of-series
// Sum of the first nth term of Series
// difficulty: 7kyu
// https://www.codewars.com/kata/555eded1ad94b00403000071
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/sum-of-the-first-nth-term-of-series

const SeriesSum = (n, sum = 0) => {
  if (n) {
    return SeriesSum(n - 1, sum + (1 / ((n - 1) * 3 + 1)));
  }
  return sum.toFixed(2);
};



console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");
