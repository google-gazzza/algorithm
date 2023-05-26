/*
2351-first-letter-to-appear-twice
leetcode/easy/2351. First Letter to Appear Twice
URL: https://leetcode.com/problems/first-letter-to-appear-twice/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function repeatedCharacter(s: string): string {
  const set = new Set<string>();

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (set.has(char)) {
      return char;
    }
    set.add(char);
  }
}

let s = 'abccbaacz';
console.log(repeatedCharacter(s));
// Output: "c"
// Explanation:
//   The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.
//   Example 2:

s = 'abcdd';
console.log(repeatedCharacter(s));
// Output: "d"
// Explanation:
//   The only letter that appears twice is 'd' so we return 'd'.
