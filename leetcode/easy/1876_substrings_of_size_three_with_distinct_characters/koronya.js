// [Easy] 1876. Substrings of Size Three with Distinct Characters
// 1876_substrings_of_size_three_with_distinct_characters

// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters
// Runtime: 84 ms, faster than 89.92% of JavaScript online submissions for Substrings of Size Three with Distinct Characters.
// Memory Usage: 39.6 MB, less than 64.34% of JavaScript online submissions for Substrings of Size Three with Distinct Characters.

const isGoodStr = (str) => str[0] !== str[1] && str[1] !== str[2] && str[2] !== str[0]

/**
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = function (s) {
  const sLen = s.length
  let count = 0
  for (let i = 0; i < sLen - 2; i += 1 || 0) {
    const substr = s.substring(i, i + 3)
    if (isGoodStr(substr) === true) {
      count += 1
    }
  }
  return count
}

countGoodSubstrings('xy') //?
countGoodSubstrings('xyzzaz') //?
countGoodSubstrings('aababcabc') //?
