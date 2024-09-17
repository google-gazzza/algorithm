/*
1925-count-square-sum-triples
leetcode/easy/1925. Count Square Sum Triples
URL: https://leetcode.com/problems/count-square-sum-triples/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function countTriples(n: number): number {
  let count = 0;

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const sum = i ** 2 + j ** 2;

      for (let k = 1; k <= n; k += 1) {
        if (sum === k ** 2) {
          count += 1;
        }
      }
    }
  }

  return count;
}

let n = 5;
console.log(countTriples(n));
// Output: 2
// Explanation: The square triples are (3,4,5) and (4,3,5).
//   Example 2:

n = 10;
console.log(countTriples(n));
// Output: 4
// Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).
