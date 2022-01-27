// [Easy] 2138. Divide a String Into Groups of Size k
// 2138_divide_a_string_into_groups_of_size_k

// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k
// Runtime: 60 ms, faster than 99.52% of JavaScript online submissions for Divide a String Into Groups of Size k.
// Memory Usage: 42.6 MB, less than 5.53% of JavaScript online submissions for Divide a String Into Groups of Size k.

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = function (s, k, fill) {
  const sLen = s.length
  const resultArr = []
  let targetIndex = 1
  let str = s[0]
  while (targetIndex < sLen) {
    if (targetIndex % k === 0) {
      resultArr.push(str)
      str = s[targetIndex]
    } else {
      str += s[targetIndex]
    }
    targetIndex += 1
  }
  resultArr.push(str.padEnd(k, fill))

  return resultArr
}

divideString('abcdefghi', 3, 'x')
divideString('abcdefghij', 3, 'x')
