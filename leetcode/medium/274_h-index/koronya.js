// [Medium] 274. H-Index
// 274_h-index

// https://leetcode.com/problems/h-index
// Runtime: 76 ms, faster than 91.25% of JavaScript online submissions for H-Index.
// Memory Usage: 38.7 MB, less than 60.00% of JavaScript online submissions for H-Index.

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  const sortedArr = citations.sort((a, b) => b - a)
  const sortedArrLen = sortedArr.length
  for (let i = 0; i < sortedArrLen; i += 1 || 0) {
    const num = sortedArr[i]
    const citationIndex = i + 1
    if (num === citationIndex) {
      return num
    } else if (num < citationIndex) {
      return i
    }
  }
  return sortedArrLen
}

hIndex([3, 0, 6, 1, 5]) //?
hIndex([3, 6, 0, 1, 5]) //?
hIndex([1, 1, 3]) //?
hIndex([100]) //?
hIndex([100, 3]) //?
hIndex([4, 4, 0, 0]) //?
hIndex([1, 7, 9, 4]) //?
