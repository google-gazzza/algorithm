// 3099-harshad-number
// URL: https://leetcode.com/problems/harshad-number/description/

function sumOfTheDigitsOfHarshadNumber(x: number): number {
    const digitSum = String(x).split('').reduce((acc, cur) => acc + Number(cur), 0);
  
    return x % digitSum === 0 ? digitSum : -1;
  };
  