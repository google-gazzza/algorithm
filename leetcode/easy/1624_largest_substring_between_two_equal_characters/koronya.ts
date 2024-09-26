// [Easy] 1624. Largest Substring Between Two Equal Characters
// 1624_largest_substring_between_two_equal_characters

// https://leetcode.com/problems/largest-substring-between-two-equal-characters
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Largest Substring Between Two Equal Characters.
// Memory Usage: 40.8 MB, less than 25.00% of TypeScript online submissions for Largest Substring Between Two Equal Characters.

/**
 * @param {string} s
 * @return {number}
 */
function maxLengthBetweenEqualCharacters(s: string): number {
  const strMap = new Map<string, number[]>()
  const sLen: number = s.length
  for (let i: number = 0; i < sLen; i += 1) {
    const str: string = s[i]
    if (strMap.has(str)) {
      strMap.set(str, [...strMap.get(str)!, i])
    } else {
      strMap.set(str, [i])
    }
  }
  const strInfoArr = [...strMap]
  const max: number = strInfoArr.reduce((accMax: number, cur: [string, number[]]): number => {
    const arr: number[] = cur[1]
    const arrLen: number = arr.length
    if (arrLen > 1) {
      const distance: number = arr[arrLen - 1] - arr[0] - 1
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
