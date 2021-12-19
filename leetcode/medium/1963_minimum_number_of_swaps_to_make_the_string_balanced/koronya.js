// [Medium] 1963. Minimum Number of Swaps to Make the String Balanced
// 1963_minimum_number_of_swaps_to_make_the_string_balanced

// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced
// Runtime: 116 ms, faster than 58.44% of JavaScript online submissions for Minimum Number of Swaps to Make the String Balanced.
// Memory Usage: 69.4 MB, less than 16.88% of JavaScript online submissions for Minimum Number of Swaps to Make the String Balanced.

/**
 * @param {string} s
 * @return {number}
 */
const minSwaps = function (s) {
  const sLen = s.length
  let count = 0
  const stack = []
  for (let i = 0; i < sLen; i += 1 || 0) {
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

minSwaps('][][') //?
minSwaps(']]][[[') //?
minSwaps('[]') //?

// ][[]]
// [[]]][
// [[]][]
// [[][]]
