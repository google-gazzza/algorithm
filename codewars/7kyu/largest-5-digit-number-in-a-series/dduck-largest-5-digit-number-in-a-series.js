// largest-5-digit-number-in-a-series
// Largest 5 digit number in a series
// difficulty: 7kyu
// https://www.codewars.com/kata/51675d17e0c1bed195000001/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/largest-5-digit-number-in-a-series

const solution = (digits) => {
  const numbers = [...String(digits)];
  let max = 0;
  let currentNum = 0;
  
  for (let i = 0; i < numbers.length - 4; i += 1) {
    currentNum = Number(numbers.slice(i, i + 5).join(''));
    if (currentNum > max) {
      max = currentNum;
    }
  }
  
  return max;
};



console.log(solution(1234567890), 67890);
