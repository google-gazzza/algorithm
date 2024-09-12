// [Easy] 541. Reverse String II
// 541_reverse_string_ii

// https://leetcode.com/problems/reverse-string-ii
// Runtime: 80 ms, faster than 83.00% of JavaScript online submissions for Reverse String II.
// Memory Usage: 43.2 MB, less than 16.60% of JavaScript online submissions for Reverse String II.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
  const k2 = k * 2
  const sLen = s.length
  const sArr = s.split('')
  const totalFragment = Math.ceil(sLen / k2)
  const diff = totalFragment * k2 - sLen
  let result = ''
  let start = 0
  for (let i = 0; i < totalFragment - 1; i += 1 || 0) {
    for (let j = k - 1; j >= 0; j -= 1 || 0) {
      result += s[start + j]
    }
    for (let j = 0; j < k; j += 1 || 0) {
      result += s[start + k + j]
    }
    start += k2
  }
  if (diff >= k) {
    result += sArr.slice(start).reverse().join('')
  } else {
    result += sArr
      .slice(start, start + k)
      .reverse()
      .join('')

    result += sArr.slice(start + k).join('')
  }

  return result
}

reverseStr('abcdefgh', 2) //?
reverseStr('abcdefg', 2) //?
reverseStr('abcdefg', 2) //?
reverseStr('abcde', 2) //?
reverseStr('abcdefghijklm', 2) //?
reverseStr('abcd', 4) //?