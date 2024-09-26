// [Medium] 1338. Reduce Array Size to The Half
// 1338_reduce_array_size_to_the_half

// https://leetcode.com/problems/reduce-array-size-to-the-half
// Runtime: 188 ms, faster than 60.00% of TypeScript online submissions for Reduce Array Size to The Half.
// Memory Usage: 69.9 MB, less than 40.00% of TypeScript online submissions for Reduce Array Size to The Half.

/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr: number[]): number {
  const halfLen: number = arr.length / 2
  const numMap = new Map<number, number>()
  arr.forEach((num) => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  const sortedArr: [number, number][] = [...numMap].sort((a, b) => b[1] - a[1])
  const sortedArrLen: number = sortedArr.length
  let count: number = 0
  for (let i: number = 0; i < sortedArrLen; i += 1) {
    count += sortedArr[i][1]
    if (count >= halfLen) {
      return i + 1
    }
  }
  return 0
}

minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]) //?
minSetSize([1, 9]) //?
minSetSize([1000, 1000, 3, 7]) //?
minSetSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) //?
