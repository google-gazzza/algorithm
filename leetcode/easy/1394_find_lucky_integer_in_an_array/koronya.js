// [Easy] 1394. Find Lucky Integer in an Array
// 1394_find_lucky_integer_in_an_array

// https://leetcode.com/problems/find-lucky-integer-in-an-array
// Runtime: 68 ms, faster than 99.75% of JavaScript online submissions for Find Lucky Integer in an Array.
// Memory Usage: 38.8 MB, less than 5.32% of JavaScript online submissions for Find Lucky Integer in an Array.
const findLucky = function (arr) {
  const numMap = new Map()
  arr.forEach(num => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  let max = -1
  numMap.forEach((value, key) => {
    if (key === value && key > max) {
      max = key
    }
  })

  return max
}
