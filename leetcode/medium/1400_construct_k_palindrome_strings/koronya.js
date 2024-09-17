// [Medium] 1400. Construct K Palindrome Strings
// 1400_construct_k_palindrome_strings

// https://leetcode.com/problems/construct-k-palindrome-strings
// Runtime: 108 ms, faster than 81.71% of JavaScript online submissions for Construct K Palindrome Strings.
// Memory Usage: 42.8 MB, less than 67.07% of JavaScript online submissions for Construct K Palindrome Strings.

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const canConstruct = function (s, k) {
  const sLen = s.length
  if (sLen < k) {
    return false
  }
  const freqMap = new Map()
  for (let i = 0; i < sLen; i += 1 || 0) {
    const num = s[i]
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }
  return [...freqMap].filter((item) => item[1] % 2 === 1).length <= k
}

canConstruct('annabelle', 2) //?
canConstruct('leetcode', 3) //?
canConstruct('true', 4) //?
canConstruct('yzyzyzyzyzyzyzy', 2) //?
canConstruct('cr', 7) //?

canConstruct('annabelle', 10) //?
