// [Medium] 91. Decode Ways
// 91_decode_ways

// https://leetcode.com/problems/decode-ways
// Runtime: 92 ms, faster than 57.09% of JavaScript online submissions for Decode Ways.
// Memory Usage: 38.9 MB, less than 83.57% of JavaScript online submissions for Decode Ways.

/**
 * @param {string} s
 * @return {number}
 */

const numDecodings = function (s, i = 0, strMap = new Map()) {
  if (strMap.has(i)) {
    return strMap.get(i)
  }
  if (s[i] === '0') {
    return 0
  }
  if (i >= s.length - 1) {
    return 1
  }
  const value = s[i] + s[i + 1] < 27 ? numDecodings(s, i + 1, strMap) + numDecodings(s, i + 2, strMap) : numDecodings(s, i + 1, strMap)
  strMap.set(i, value)
  return strMap.get(i)
}

numDecodings('12') //?
numDecodings('226') //?
numDecodings('11106') //?
// numDecodings('111') //?
// numDecodings('1111122') //?
// numDecodings('0') //?
// numDecodings('06') //?
