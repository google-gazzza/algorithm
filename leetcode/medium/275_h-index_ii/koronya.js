// [Medium] 275. H-Index II
// 275_h-index_ii

// https://leetcode.com/problems/h-index-ii
// Runtime: 76 ms, faster than 97.30% of JavaScript online submissions for H-Index II.
// Memory Usage: 41.5 MB, less than 51.35% of JavaScript online submissions for H-Index II.

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  const citationsLen = citations.length
  for (let i = citationsLen - 1; i >= 0; i -= 1) {
    const num = citations[i]
    const citationIndex = citationsLen - i
    if (num === citationIndex) {
      return num
    } else if (num < citationIndex) {
      return citationIndex - 1
    }
  }
  return citationsLen
}

hIndex([0, 1, 3, 5, 6]) //?
hIndex([0, 0]) //?
hIndex([1, 1, 3]) //?
hIndex([100]) //?
