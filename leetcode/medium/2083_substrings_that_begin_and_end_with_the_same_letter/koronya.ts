// [Medium] 2083. Substrings That Begin and End With the Same Letter
// 2083_substrings_that_begin_and_end_with_the_same_letter

// https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter
// Runtime: 157 ms, faster than 100.00% of TypeScript online submissions for Substrings That Begin and End With the Same Letter.
// Memory Usage: 49.6 MB, less than 100.00% of TypeScript online submissions for Substrings That Begin and End With the Same Letter.

function numberOfSubstrings(s: string): number {
  const getValue = (n: number): number => {
    let sum = 0;
    for (let i: number = 1; i <= n; i += 1) {
      sum += i;
    }
    return sum;
  };
  const strMap = new Map<string, number>();
  s.split("").forEach((str) => {
    strMap.set(str, (strMap.get(str) || 0) + 1);
  });
  return [...strMap].reduce((acc, cur) => acc + getValue(cur[1]), 0);
}
