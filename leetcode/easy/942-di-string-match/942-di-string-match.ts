/*
leetcode/easy/942. DI String Match
942-di-string-match
uRL: https://leetcode.com/problems/di-string-match/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function diStringMatch(s: string): number[] {
  const result: number[] = [];

  for (let i = 0, j = s.length, k = 0; k <= s.length; k++) {
    if (s[k] === 'I') {
      result.push(i++);
    } else {
      result.push(j--);
    }
  }

  return result;
}

let s = 'IDID';
console.log(diStringMatch(s));
// Output: [0,4,1,3,2]

s = 'III';
console.log(diStringMatch(s));
// Output: [0,1,2,3]

s = 'DDI';
console.log(diStringMatch(s));
// Output: [3,2,0,1]
