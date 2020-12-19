// [Medium] 1433. Check If a String Can Break Another String 
// 1433_check_if_a_string_can_break_another_string 

// https://leetcode.com/problems/check-if-a-string-can-break-another-string
// Runtime: 252 ms, faster than 72.73% of JavaScript online submissions for Check If a String Can Break Another String.
// Memory Usage: 53.5 MB, less than 50.91% of JavaScript online submissions for Check If a String Can Break Another String.
const checkIfCanBreak = function(s1, s2) {
  const sortedS1 = [...s1].sort()
  const sortedS2 = [...s2].sort()

  return sortedS1.every((str, index) => str >= sortedS2[index]) || sortedS1.every((str, index) => str <= sortedS2[index])
}
