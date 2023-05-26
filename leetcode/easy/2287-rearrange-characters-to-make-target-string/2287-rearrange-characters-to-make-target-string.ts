/*
2287-rearrange-characters-to-make-target-string
leetcode/easy/2287. Rearrange Characters to Make Target String
URL: https://leetcode.com/problems/rearrange-characters-to-make-target-string/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function rearrangeCharacters(s: string, target: string): number {
  const sArr = s.split('');
  const targetArr = target.split('');
  let count = 0;
  let isFullIterated = true;

  while (isFullIterated) {
    targetArr.some((e) => {
      if (sArr.indexOf(e) !== -1) {
        sArr.splice(sArr.indexOf(e), 1);
        return false;
      }
      isFullIterated = false;
      return true;
    });

    if (isFullIterated) {
      count += 1;
    }
  }

  return count;
}

let s = 'ilovecodingonleetcode';
let target = 'code';
console.log(rearrangeCharacters(s, target));
// Output: 2
// Explanation:
//   For the first copy of "code", take the letters at indices 4, 5, 6, and 7.
// For the second copy of "code", take the letters at indices 17, 18, 19, and 20.
// The strings that are formed are "ecod" and "code" which can both be rearranged into "code".
//   We can make at most two copies of "code", so we return 2.
// Example 2:

s = 'abcba';
target = 'abc';
console.log(rearrangeCharacters(s, target));
// Output: 1
// Explanation:
//   We can make one copy of "abc" by taking the letters at indices 0, 1, and 2.
// We can make at most one copy of "abc", so we return 1.
// Note that while there is an extra 'a' and 'b' at indices 3 and 4, we cannot reuse the letter 'c' at index 2, so we cannot make a second copy of "abc".
//   Example 3:

s = 'abbaccaddaeea';
target = 'aaaaa';
console.log(rearrangeCharacters(s, target));
// Output: 1
// Explanation:
//   We can make one copy of "aaaaa" by taking the letters at indices 0, 3, 6, 9, and 12.
// We can make at most one copy of "aaaaa", so we return 1.

s = 'lrnvlcqukanpdnluowenfxquitzryponxsikhciohyostvmkapkfpglzikitwiraqgchxnpryhwpuwpozacjhmwhjvslprqlnxrk';
target = 'woijih';
console.log(rearrangeCharacters(s, target));
