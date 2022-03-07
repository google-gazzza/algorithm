/*
2194-cells-in-a-range-on-an-excel-sheet
leetcode/easy/2194. Cells in a Range on an Excel Sheet
Difficulty: easy
URL: https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

NOTE: Description

NOTE: Constraints
 - s.length == 5
 - 'A' <= s[0] <= s[3] <= 'Z'
 - '1' <= s[1] <= s[4] <= '9'
 - s consists of uppercase English letters, digits and ':'.

NOTE: Explanation
*/

function cellsInRange(s: string): string[] {
  const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const result = [];

  for (const alphabet of ALPHABETS.slice(ALPHABETS.indexOf(s[0]), ALPHABETS.indexOf(s[3]) + 1)) {
    for (let i = Number(s[1]); i <= Number(s[4]); i += 1) {
      result.push(alphabet + i);
    }
  }

  return result;
};

let s = 'K1:L2';
console.log(cellsInRange(s));
// Output: ["K1","K2","L1","L2"]

s = 'A1:F1';
console.log(cellsInRange(s));
// Output: ["A1","B1","C1","D1","E1","F1"]
