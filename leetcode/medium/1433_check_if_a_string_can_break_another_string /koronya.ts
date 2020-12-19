// [Medium] 1433. Check If a String Can Break Another String 
// 1433_check_if_a_string_can_break_another_string 

// https://leetcode.com/problems/check-if-a-string-can-break-another-string
// Runtime: 268 ms, faster than 50.00% of TypeScript online submissions for Check If a String Can Break Another String.
// Memory Usage: 53.7 MB, less than 100.00% of TypeScript online submissions for Check If a String Can Break Another String.
function checkIfCanBreak (s1: string, s2: string): boolean {
  const sortedS1: string[] = [...s1].sort()
  const sortedS2: string[] = [...s2].sort()

  return sortedS1.every((str, index) => str >= sortedS2[index]) || sortedS1.every((str, index) => str <= sortedS2[index])
}
