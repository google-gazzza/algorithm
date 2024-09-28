// [Medium] 1963. Minimum Number of Swaps to Make the String Balanced
// 1963_minimum_number_of_swaps_to_make_the_string_balanced

// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced
// Runtime: 128 ms, faster than 66.67% of TypeScript online submissions for Minimum Number of Swaps to Make the String Balanced.
// Memory Usage: 69.4 MB, less than 33.33% of TypeScript online submissions for Minimum Number of Swaps to Make the String Balanced.

function minSwaps(s: string): number {
  const sLen: number = s.length
  let count: number = 0
  const stack: string[] = []
  for (let i: number = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (str === '[') {
      stack.push('[')
    } else {
      if (stack.length > 0) {
        stack.pop()
      } else {
        count += 1
        stack.push('[')
      }
    }
  }

  return count
}
