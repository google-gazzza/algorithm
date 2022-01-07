// [Medium] 1100. Find K-Length Substrings With No Repeated Characters
// 1100_find_k-length_substrings_with_no_repeated_characters

// https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters
// Runtime: 135 ms, faster than 36.11% of JavaScript online submissions for Find K-Length Substrings With No Repeated Characters.
// Memory Usage: 44.6 MB, less than 58.33% of JavaScript online submissions for Find K-Length Substrings With No Repeated Characters.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const numKLenSubstrNoRepeats = function (s, k) {
  const sLen = s.length
  if (sLen < k) {
    return 0
  }
  let count = 0
  for (let i = 0; i < sLen - k + 1; i += 1 || 0) {
    const str = s.substring(i, i + k)
    const charSet = new Set()
    let validStr = true
    for (let i = 0; i < k; i += 1 || 0) {
      const char = str[i]
      if (charSet.has(char) === false) {
        charSet.add(char)
      } else {
        validStr = false
        break
      }
    }
    if (validStr === true) {
      count += 1
    }
  }

  return count
}

numKLenSubstrNoRepeats('havefunonleetcode', 5) //?
numKLenSubstrNoRepeats('home, 5') //?
