// [Easy] 697. Degree of an Array
// 697_degree_of_an_array

// https://leetcode.com/problems/degree-of-an-array
// Runtime: 96 ms, faster than 70.08% of JavaScript online submissions for Degree of an Array.
// Memory Usage: 41.6 MB, less than 5.74% of JavaScript online submissions for Degree of an Array.
const findDistance = (arr, num) => arr.lastIndexOf(num) - arr.indexOf(num)

const findShortestSubArray = function (nums) {
  const numMap = new Map()
  nums.forEach(num => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  const numMapArr = [...numMap]
  const countArr = numMapArr.map(item => item[1])
  const maxCount = Math.max(...countArr)
  if (maxCount === 1) {
    return 1
  }
  const maxNumArr = numMapArr.filter(item => item[1] === maxCount).map(item => item[0])

  return maxNumArr.reduce((acc, cur) => {
    const distance = findDistance(nums, cur)
    return acc > distance ? distance : acc
  }, nums.length) + 1
}
