// leetcode/easy/2595. Number of Even and Odd Bits
// 2595-number-of-even-and-odd-bits
// URL: https://leetcode.com/problems/number-of-even-and-odd-bits/description/

function evenOddBit(n: number): number[] {
  const nString = n.toString(2).split('').reverse();
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < nString.length; i += 1) {
    if (i % 2 === 0 && nString[i] === '1') {
      evenCount += Number(nString[i]);
    }
    if (i % 2 === 1 && nString[i] === '1') {
      oddCount += Number(nString[i]);
    }
  }

  return [evenCount, oddCount];
}

let n = 17;
console.log(evenOddBit(n));
// Output: [2,0]

n = 2;
console.log(evenOddBit(n));
// Output: [0,1]

