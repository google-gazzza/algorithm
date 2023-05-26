// [Medium] 1814. Count Nice Pairs in an Array
// 1814_count_nice_pairs_in_an_array

// https://leetcode.com/problems/count-nice-pairs-in-an-array
// Runtime: 264 ms, faster than 75.00% of TypeScript online submissions for Count Nice Pairs in an Array.
// Memory Usage: 58.8 MB, less than 75.00% of TypeScript online submissions for Count Nice Pairs in an Array.

const getRev = (num: number): number => Number(String(num).split('').reverse().join(''))

function countNicePairs(nums: number[]): number {
  const matchedMap = new Map<number, number>()
  let count: number = 0
  nums.forEach((num) => {
    let diff = num - getRev(num)
    let matchedCount = matchedMap.get(diff) || 0
    count += matchedCount
    matchedMap.set(diff, matchedCount + 1)
  })

  return count % (10 ** 9 + 7)
}



// countNicePairs([42, 11, 1, 97]) //?
// countNicePairs([13, 10, 35, 24, 76]) //?
// countNicePairs([1, 1, 1, 1, 10, 10, 10, 10]) //?
countNicePairs([1, 10]) //?
