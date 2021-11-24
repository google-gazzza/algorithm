// [Easy] 1243. Array Transformation
// 1243_array_transformation

// https://leetcode.com/problems/array-transformation
// Runtime: 76 ms, faster than 66.67% of JavaScript online submissions for Array Transformation.
// Memory Usage: 40.7 MB, less than 40.00% of JavaScript online submissions for Array Transformation.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const transformArray = function (arr) {
  const limit = arr.length - 1
  const noMoreCount = limit - 1
  let count = 0

  while (noMoreCount > count) {
    count = 0
    const adjustArr = []
    for (let i = 1; i < limit; i += 1 || 0) {
      const prev = arr[i - 1]
      const now = arr[i]
      const next = arr[i + 1]
      if (now > prev && now > next) {
        adjustArr.push(-1)
      } else if (now < prev && now < next) {
        adjustArr.push(1)
      } else {
        adjustArr.push(0)
        count += 1
      }
    }
    adjustArr.forEach((item, index) => {
      arr[index + 1] += item
    })
  }

  return arr
}

transformArray([6, 2, 3, 4]) //?
transformArray([1, 6, 3, 4, 3, 5]) //?
transformArray([2, 1, 2, 1, 1, 2, 2, 1]) //?
