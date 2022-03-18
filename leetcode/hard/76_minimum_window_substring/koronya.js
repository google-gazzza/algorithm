// [Hard] 76. Minimum Window Substring
// 76_minimum_window_substring

// https://leetcode.com/problems/minimum-window-substring
// Runtime: 80 ms, faster than 96.53% of JavaScript online submissions for Minimum Window Substring.
// Memory Usage: 43.6 MB, less than 86.61% of JavaScript online submissions for Minimum Window Substring.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const sLen = s.length
  const tLen = t.length
  if (sLen < tLen) {
    return ''
  }
  const tMap = new Map()
  t.split('').forEach((str) => {
    tMap.set(str, (tMap.get(str) || 0) + 1)
  })

  let left = 0
  let minLeft = 0
  let minLen = sLen + 1
  let count = 0
  for (let right = 0; right < sLen; right += 1 || 0) {
    const str = s[right]
    if (tMap.has(str) === true) {
      let val = tMap.get(str)
      val -= 1
      tMap.set(str, val)
      if (val >= 0) {
        count += 1
      }
      while (count === tLen) {
        if (right - left + 1 < minLen) {
          minLeft = left
          minLen = right - left + 1
        }
        const leftStr = s[left]
        if (tMap.has(leftStr) === true) {
          let leftVal = tMap.get(leftStr)
          leftVal += 1
          tMap.set(leftStr, leftVal)
          if (leftVal > 0) {
            count -= 1
          }
        }
        left += 1
      }
    }
  }
  if (minLen > sLen) {
    return ''
  }

  return s.substring(minLeft, minLeft + minLen)
}

// minWindow('ADOBECODEBANC', 'ABC') === 'BANC'
// minWindow('a', 'a') === 'a'
// minWindow('bb', 'bb') === 'bb'
// minWindow('a', 'aa') === ''
// minWindow('ab', 'a') === 'a'
// minWindow('ab', 'b') === 'b'
