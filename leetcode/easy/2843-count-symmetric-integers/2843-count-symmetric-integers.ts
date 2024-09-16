// leetcode/easy/2843. Count Symmetric Integers
// 2843-count-symmetric-integers
// URL: https://leetcode.com/problems/count-symmetric-integers/

function toNumberArray(str: string): number[] {
  return str.split('').map((num) => parseInt(num, 10));
}

function sum(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function isSymmetric(num: number): boolean {
  if (num < 10) {
    return false;
  }

  const numStr = num.toString();
  const isEven = numStr.length % 2 === 0;

  if (!isEven) {
    return false;
  }

  const left = numStr.slice(0, numStr.length / 2);
  const right = numStr.slice(numStr.length / 2);

  return sum(toNumberArray(left)) === sum(toNumberArray(right));
}

function countSymmetricIntegers(low: number, high: number): number {
  let count = 0;
  const result = [];

  for (let i = low; i <= high; i += 1) {
    if (isSymmetric(i)) {
      count += 1;
      result.push(i);
    }
  }

  return count;
}

let low = 1;
let high = 100;
console.log(countSymmetricIntegers(low, high));

low = 1200;
high = 1230;
console.log(countSymmetricIntegers(low, high));
// isSymmetric(111);
// isSymmetric(1221);
// isSymmetric(1010);
low = 100;
high = 1782;
console.log(countSymmetricIntegers(low, high));
// 44