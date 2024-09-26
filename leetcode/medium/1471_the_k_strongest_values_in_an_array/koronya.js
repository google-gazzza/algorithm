// [Medium] 1471. The k Strongest Values in an Array
// 1471_the_k_strongest_values_in_an_array

// https://leetcode.com/problems/the-k-strongest-values-in-an-array
// Runtime: 425 ms, faster than 16.67% of JavaScript online submissions for The k Strongest Values in an Array.
// Memory Usage: 92 MB, less than 5.56% of JavaScript online submissions for The k Strongest Values in an Array.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b)
  const median = arr[Math.floor((arr.length - 1) / 2)]
  const adjustArr = arr.map((num) => ({
    diff: Math.abs(num - median),
    num,
  }))
  adjustArr.sort((a, b) => (b.diff - a.diff ? b.diff - a.diff : b.num - a.num))

  return adjustArr.slice(0, k).map((item) => item.num)
}

getStrongest([1, 2, 3, 4, 5], 2) //?
getStrongest([1, 1, 3, 5, 5], 2) //?
getStrongest([6, 7, 11, 7, 6, 8], 5) //?
