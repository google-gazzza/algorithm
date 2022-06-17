/*
386-lexicographical-numbers
leetcode/medium/386. Lexicographical Numbers
URL: https://leetcode.com/problems/lexicographical-numbers/

NOTE: Description
NOTE: Constraints
  - 1 <= n <= 5 * 104
NOTE: Explanation
NOTE: Reference
*/

function lexicalOrder(n: number): number[] {
  const result = [];

  for (let i = 1; i < n + 1; i += 1) {
    result.push(String(i));
  }

  result.sort((a, b) => a.localeCompare(b));

  return result.map(Number);
}

let n = 13;
console.log(lexicalOrder(n));
