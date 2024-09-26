// [Medium] 1338. Reduce Array Size to The Half
// 1338_reduce_array_size_to_the_half

// https://leetcode.com/problems/reduce-array-size-to-the-half
// Runtime: 192 ms, faster than 34.76% of JavaScript online submissions for Reduce Array Size to The Half.
// Memory Usage: 69.6 MB, less than 18.90% of JavaScript online submissions for Reduce Array Size to The Half.

/**
 * @param {number[]} arr
 * @return {number}
 */
const minSetSize = function (arr) {
  const halfLen = arr.length / 2
  const numMap = new Map()
  arr.forEach((num) => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  const sortedArr = [...numMap].sort((a, b) => b[1] - a[1])
  const sortedArrLen = sortedArr.length
  let count = 0
  for (let i = 0; i < sortedArrLen; i += 1 || 0) {
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
