/*
2399-check-distances-between-same-letters
leetcode/easy/2399. Check Distances Between Same Letters
URL: https://leetcode.com/problems/check-distances-between-same-letters/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function checkDistances(s: string, distance: number[]): boolean {
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const set = new Set();

  for (let i = 0; i < alphabet.length; i += 1) {
    if (s.indexOf(alphabet[i]) !== -1) {
      if (!set.has(alphabet[i])) {
        set.add(alphabet[i]);
        if (s.lastIndexOf(alphabet[i]) - s.indexOf(alphabet[i]) - 1 !== distance[i]) {
          return false;
        }
      } else if (distance[s.lastIndexOf(alphabet[i])] !== 0) {
        return false;
      }
    }
  }

  return true;
}

let s = 'abaccb';
let distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(checkDistances(s, distance));
// Output: true
// Explanation:
//   - 'a' appears at indices 0 and 2 so it satisfies distance[0] = 1.
//   - 'b' appears at indices 1 and 5 so it satisfies distance[1] = 3.
//   - 'c' appears at indices 3 and 4 so it satisfies distance[2] = 0.
// Note that distance[3] = 5, but since 'd' does not appear in s, it can be ignored.
//   Return true because s is a well-spaced string.
//   Example 2:

s = 'aa';
distance = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(checkDistances(s, distance));

s = 'zz';
distance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(checkDistances(s, distance));

s = 'zz';
distance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
console.log(checkDistances(s, distance));
