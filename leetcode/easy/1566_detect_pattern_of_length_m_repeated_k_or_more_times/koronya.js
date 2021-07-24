// [Easy] 1566. Detect Pattern of Length M Repeated K or More Times
// 1566_detect_pattern_of_length_m_repeated_k_or_more_times

// https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times
// Runtime: 64 ms, faster than 96.70% of JavaScript online submissions for Detect Pattern of Length M Repeated K or More Times.
// Memory Usage: 40.5 MB, less than 27.47% of JavaScript online submissions for Detect Pattern of Length M Repeated K or More Times.

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
const containsPattern = function (arr, m, k) {
  const arrLen = arr.length
  const getStr = (start) => {
    let str = ''
    for (let i = start; i < start + m; i += 1 || 0) {
      str += `${arr[i]},`
    }
    return str
  }

  for (let i = 0; i < arrLen - m + 1; i += 1 || 0) {
    let str = getStr(i)
    let count = 1
    let j = i + m

    while (j < arrLen - m + 1) {
      const nextStr = getStr(j)
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
