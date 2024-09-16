// leetcode/medium/343. Integer Break
// 343-integer-break
// URL: https://leetcode.com/problems/integer-break/description/

function integerBreak(n: number): number {
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }

  if (n === 4) {
    return 4;
  }

  let result = 1;

  while (n > 4) {
    result *= 3;
    n -= 3;
  }

  result *= n;

  return result;
}