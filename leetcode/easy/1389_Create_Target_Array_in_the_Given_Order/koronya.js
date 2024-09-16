// Runtime: 64 ms, faster than 22.90% of JavaScript online submissions for Create Target Array in the Given Order.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Create Target Array in the Given Order.
// https://leetcode.com/problems/create-target-array-in-the-given-order
const createTargetArray = (nums, index) => {
  const resultArr = []
  nums.forEach((item, idx) => {
    resultArr.splice(index[idx], 0, item)
  })

  return resultArr
}
