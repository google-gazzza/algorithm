// [Medium] 275. H-Index II
// 275_h-index_ii

// https://leetcode.com/problems/h-index-ii
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for H-Index II.
// Memory Usage: 42.3 MB, less than 90.00% of TypeScript online submissions for H-Index II.

function hIndex(citations: number[]): number {
  const citationsLen: number = citations.length
  for (let i: number = citationsLen - 1; i >= 0; i -= 1) {
    const num: number = citations[i]
    const citationIndex: number = citationsLen - i
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
