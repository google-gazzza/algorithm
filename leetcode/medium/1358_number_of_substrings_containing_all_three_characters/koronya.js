// [Medium] 1358. Number of Substrings Containing All Three Characters
// 1358_number_of_substrings_containing_all_three_characters

// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters
// Runtime: 144 ms, faster than 25.93% of JavaScript online submissions for Number of Substrings Containing All Three Characters.
// Memory Usage: 45.4 MB, less than 20.37% of JavaScript online submissions for Number of Substrings Containing All Three Characters.

const numberOfSubstrings = function (s) {
  const sLen = s.length
  const countMap = new Map()
  let result = 0
  let left = 0
  for (let right = 0; right < sLen; right += 1 || 0) {
    const rightStr = s[right]
    countMap.set(rightStr, (countMap.get(rightStr) || 0) + 1)
    while (countMap.size > 2) {
      const leftStr = s[left]
      result += sLen - right
      const leftStrCount = countMap.get(leftStr)
      if (leftStrCount === 1) {
        countMap.delete(leftStr)
      } else {
        countMap.set(leftStr, leftStrCount - 1)
      }
      left += 1
    }
  }

  return result
}

numberOfSubstrings('abcabc') //?
