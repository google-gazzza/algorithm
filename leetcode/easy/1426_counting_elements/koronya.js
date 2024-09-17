// [Medium] 1426. Counting Elements
// 1426_counting_elements

// https://leetcode.com/problems/counting-elements
// Runtime: 74 ms, faster than 85.71% of JavaScript online submissions for Counting Elements.
// Memory Usage: 44.8 MB, less than 9.52% of JavaScript online submissions for Counting Elements.

/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = function (arr) {
  const numMap = new Map()
  arr.forEach((num) => numMap.set(num, (numMap.get(num) || 0) + 1))
  let result = 0
  for (const [key, count] of numMap) {
    if (numMap.has(key + 1) === true) {
      result += count
    }
  }

  return result
}

countElements([1, 2, 3])
countElements([1, 1, 3, 3, 5, 5, 7, 7])
countElements([1, 1, 3, 3, 5, 5, 7, 7, 2])
