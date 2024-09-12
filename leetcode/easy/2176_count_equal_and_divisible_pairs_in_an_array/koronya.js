// [Easy] 2176. Count Equal and Divisible Pairs in an Array
// 2176_count_equal_and_divisible_pairs_in_an_array

// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array
// Runtime: 62 ms, faster than 94.81% of JavaScript online submissions for Count Equal and Divisible Pairs in an Array.
// Memory Usage: 44.3 MB, less than 20.00% of JavaScript online submissions for Count Equal and Divisible Pairs in an Array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = function (nums, k) {
  const numMap = new Map()
  nums.forEach((num, index) => {
    if (numMap.has(num) === true) {
      numMap.get(num).push(index)
    } else {
      numMap.set(num, [index])
    }
  })

  return [...numMap].reduce((acc, cur) => {
    const [_, arr] = cur
    const arrLen = arr.length
    let count = 0
    for (let i = 0; i < arrLen; i += 1 || 0) {
      const a = arr[i]
      for (let j = i + 1; j < arrLen; j += 1 || 0) {
        if ((a * arr[j]) % k === 0) {
          count += 1
        }
      }
    }
    return acc + count
  }, 0)
}

countPairs([3, 1, 2, 2, 2, 1, 3], 2)
countPairs([1, 2, 3, 4], 1)
