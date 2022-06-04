// [Medium] 1297. Maximum Number of Occurrences of a Substring
// 1297_maximum_number_of_occurrences_of_a_substring

// https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/
// Runtime: 222 ms, faster than 57.73% of JavaScript online submissions for Maximum Number of Occurrences of a Substring.
// Memory Usage: 50.5 MB, less than 88.66% of JavaScript online submissions for Maximum Number of Occurrences of a Substring.

/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
const maxFreq = function (s, maxLetters, minSize, maxSize) {
  let result = 0
  let index = 0
  const freqMap = new Map()
  const limit = s.length + 1 - minSize
  while (index < limit) {
    const word = s.slice(index, index + minSize)
    const wordSet = new Set(word)
    if (wordSet.size <= maxLetters) {
      const value = (freqMap.get(word) || 0) + 1
      freqMap.set(word, value)
      result = Math.max(result, value)
    }
    index += 1
  }

  return result
}

// TLE...
const maxFreq2 = function (s, maxLetters, minSize, maxSize) {
  const map = new Map()
  const sLen = s.length
  const checkMap = (str) => {
    const strLen = str.length
    if (strLen < minSize || strLen > maxSize) {
      return
    }
    const strSet = new Set(str)
    if (strSet.size > maxLetters) {
      return
    }
    map.set(str, (map.get(str) || 0) + 1)
  }
  const loop = (str, start) => {
    checkMap(str)
    if (str.length < maxSize && start < sLen) {
      loop(str + s[start], start + 1)
    }
  }
  for (let i = 0; i < sLen; i += 1 || 0) {
    loop(s[i], i + 1)
  }

  if (map.size === 0) {
    return 0
  }
  return Math.max(...[...map].map((item) => item[1]))
}

// maxFreq('aababcaab', 2, 3, 4)
// maxFreq('aaaa', 1, 3, 3)
maxFreq('abcde', 2, 3, 3)
