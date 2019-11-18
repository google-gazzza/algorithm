// https://leetcode.com/problems/happy-number/
// Runtime: 56 ms, faster than 94.80% of JavaScript online submissions for Happy Number.
// Memory Usage: 35.2 MB, less than 84.62% of JavaScript online submissions for Happy Number.

const sumOfEachNumberSquare = (n) => n.toString().split('')
  .reduce((acc, cur) => acc + parseInt(cur, 10) ** 2, 0);

const isHappy = (n) => {
  const sum = sumOfEachNumberSquare(n);
  if (n === 1) {
    return true;
  }
  return sum <= 5 ? false : isHappy(sum);
};

console.log(isHappy(7));
//?
