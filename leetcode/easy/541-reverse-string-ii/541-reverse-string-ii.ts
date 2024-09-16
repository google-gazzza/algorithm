/*
541-reverse-string-ii
leetcode/easy/541. Reverse String II
URL: https://leetcode.com/problems/reverse-string-ii/

NOTE: Description
NOTE: Constraints
  - 1 <= s.length <= 104
  - s consists of only lowercase English letters.
  - 1 <= k <= 104

NOTE: Explanation
NOTE: Reference
*/

function reverseStr(s: string, k: number): string {
  const charArr: string[] = s.split('');
  const result: string[] = [];

  while (charArr.length) {
    result.push(...charArr.splice(0, k).reverse());
    result.push(...charArr.splice(0, k));
  }

  return result.join('');
}

let s = 'abcdefg';
let k = 2;
console.log(reverseStr(s, k));
// Output: "bacdfeg"

s = 'abcd';
k = 2;
console.log(reverseStr(s, k));
// Output: "bacd"
