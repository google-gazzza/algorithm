// https://leetcode.com/problems/house-robber
// Runtime: 56 ms, faster than 50.71% of JavaScript online submissions for House Robber.
// Memory Usage: 33.8 MB, less than 80.95% of JavaScript online submissions for House Robber.
const rob = nums => {
  const numsLen = nums.length
  if (numsLen === 0) {
    return 0
  } else if (numsLen === 1) {
    return nums[0]
  }
  
  const partMax = []
  partMax.push(nums[0])
  partMax.push(Math.max(nums[0], nums[1]))

  for (let i = 2; i < numsLen; i += 1) {
    partMax.push(Math.max(partMax[i - 1], partMax[i - 2] + nums[i]))
  }

  return partMax[numsLen - 1]
}
