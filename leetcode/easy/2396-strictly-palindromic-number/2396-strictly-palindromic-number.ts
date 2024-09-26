/*
2396-strictly-palindromic-number
leetcode/easy/2396. Strictly Palindromic Number
URL: https://leetcode.com/problems/strictly-palindromic-number/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function isStrictlyPalindromic(n: number): boolean {
  for (let i = 2; i <= n - 2; i += 1) {
    const numStr = n.toString(i);

    if (numStr !== numStr.split('').reverse().join('')) {
      return false;
    }
  }

  return true;
}

let n = 9;
console.log(isStrictlyPalindromic(n));
// Output: false
// Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
//   In base 3: 9 = 100 (base 3), which is not palindromic.
//   Therefore, 9 is not strictly palindromic so we return false.
//   Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.
//   Example 2:

n = 4;
console.log(isStrictlyPalindromic(n));
// Output: false
// Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
//   Therefore, we return false.
