// leetcode/easy/2549. Count Distinct Numbers on Board
// 2549-count-distinct-numbers-on-board
// URL: https://leetcode.com/problems/count-distinct-numbers-on-board/description/

function distinctIntegers(n: number): number {
  if (n === 1) {
    return 1;
  }

  let count = 0;

  for (let i = 1; i <= n; i += 1) {
    if (i + 1 <= n) {
      count += 1;
    }
  }

  return count;
}

let n = 5;
console.log(distinctIntegers(n));
// Output: 4

n = 3;
console.log(distinctIntegers(n));
// Output: 2
