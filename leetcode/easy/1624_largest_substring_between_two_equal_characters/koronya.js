// [Easy] 1624. Largest Substring Between Two Equal Characters
// 1624_largest_substring_between_two_equal_characters

// https://leetcode.com/problems/largest-substring-between-two-equal-characters
// Runtime: 68 ms, faster than 99.42% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
// Memory Usage: 40.7 MB, less than 6.40% of JavaScript online submissions for Largest Substring Between Two Equal Characters.

/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = function (s) {
  const strMap = new Map()
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (strMap.has(str)) {
      strMap.set(str, [...strMap.get(str), i])
    } else {
      strMap.set(str, [i])
    }
  }
  const strInfoArr = [...strMap]
  const max = strInfoArr.reduce((accMax, cur) => {
    const arr = cur[1]
    const arrLen = arr.length
    if (arrLen > 1) {
      const distance = arr[arrLen - 1] - arr[0] - 1
      return Math.max(distance, accMax)
    }
    return accMax
  }, -1)

  return max
}

maxLengthBetweenEqualCharacters('aa') //?
maxLengthBetweenEqualCharacters('abca') //?
maxLengthBetweenEqualCharacters('cbzxy') //?
maxLengthBetweenEqualCharacters('cabbac') //?
maxLengthBetweenEqualCharacters('cabbacac') //?
maxLengthBetweenEqualCharacters('mgntdygtxrvxjnwksqhxuxtrv') //?
