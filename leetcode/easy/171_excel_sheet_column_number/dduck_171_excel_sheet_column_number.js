// https://leetcode.com/problems/excel-sheet-column-number

// Runtime: 60 ms, faster than 98.77% of JavaScript online submissions for Excel Sheet Column Number.
//   Memory Usage: 35 MB, less than 73.33% of JavaScript online submissions for Excel Sheet Column Number.
// Runtime: 68 ms, faster than 84.71% of JavaScript online submissions for Excel Sheet Column Number.
//   Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Excel Sheet Column Number.
// Runtime: 76 ms, faster than 55.89% of JavaScript online submissions for Excel Sheet Column Number.
//   Memory Usage: 34.9 MB, less than 80.00% of JavaScript online submissions for Excel Sheet Column Number.

const titleToNumber = (s) => s.split('')
  .reduceRight((a, c, i, arr) => {
    const exponent = arr.length - i - 1;
    const columnNumber = (c.charCodeAt(0) % 65) + 1;
    return a + ((26 ** exponent) * columnNumber || columnNumber);
  }, 0);

// Runtime: 72 ms, faster than 70.47% of JavaScript online submissions for Excel Sheet Column Number.
//   Memory Usage: 35.1 MB, less than 73.33% of JavaScript online submissions for Excel Sheet Column Number.
// Runtime: 80 ms, faster than 40.25% of JavaScript online submissions for Excel Sheet Column Number.
//   Memory Usage: 35 MB, less than 73.33% of JavaScript online submissions for Excel Sheet Column Number.
const titleToNumber2 = (s) => s.split('')
  .reverse()
  .map((v, i) => {
    const columnNumber = (v.charCodeAt(0) % 65) + 1;
    return (26 ** i) * columnNumber || columnNumber;
  })
  .reduce((a, c) => a + c);

console.log(titleToNumber('A'), 1);
// Input: "A"
// Output: 1

console.log(titleToNumber('AA'), 27);
console.log(titleToNumber('AAA'), 703);

console.log(titleToNumber('AB'), 28);
// Input: "AB"
// Output: 28

console.log(titleToNumber('ZY'), 701);
// Input: "ZY"
// Output: 701
