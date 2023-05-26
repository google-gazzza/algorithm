// [Medium] 274. H-Index
// 274_h-index

// https://leetcode.com/problems/h-index
// Runtime: 72 ms, faster than 100.00% of TypeScript online submissions for H-Index.
// Memory Usage: 40.2 MB, less than 100.00% of TypeScript online submissions for H-Index.

function hIndex(citations: number[]): number {
  const sortedArr: number[] = citations.sort((a, b) => b - a)
  const sortedArrLen: number = sortedArr.length
  for (let i: number = 0; i < sortedArrLen; i += 1) {
    const num: number = sortedArr[i]
    const citationIndex: number = i + 1
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
