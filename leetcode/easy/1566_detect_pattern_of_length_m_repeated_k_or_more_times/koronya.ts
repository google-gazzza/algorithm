// [Easy] 1566. Detect Pattern of Length M Repeated K or More Times
// 1566_detect_pattern_of_length_m_repeated_k_or_more_times

// https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Detect Pattern of Length M Repeated K or More Times.
// Memory Usage: 40.7 MB, less than 25.00% of TypeScript online submissions for Detect Pattern of Length M Repeated K or More Times.

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
function containsPattern(arr: number[], m: number, k: number): boolean {
  const arrLen: number = arr.length
  const getStr = (start: number): string => {
    let str: string = ''
    for (let i: number = start; i < start + m; i += 1) {
      str += `${arr[i]},`
    }
    return str
  }

  for (let i: number = 0; i < arrLen - m + 1; i += 1) {
    let str: string = getStr(i)
    let count: number = 1
    let j: number = i + m

    while (j < arrLen - m + 1) {
      const nextStr: string = getStr(j)
      if (nextStr !== str) {
        break
      }
      count += 1
      if (count >= k) {
        return true
      }
      j += m
    }
  }

  return false
}

containsPattern([1, 2, 4, 4, 4, 4], 1, 3) //?
containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2) //?
containsPattern([1, 2, 1, 2, 1, 3], 2, 3) //?
containsPattern([1, 2, 3, 1, 2], 2, 2) //?
containsPattern([2, 2, 2, 2], 2, 3) //?
