// https://leetcode.com/problems/majority-element/
// Runtime: 72 ms, faster than 31.65% of JavaScript online submissions for Majority Element.
// Memory Usage: 37.5 MB, less than 57.14% of JavaScript online submissions for Majority Element.

const majorityElement = (nums) => {
  const frequencyMap = new Map()
  const numsLen = nums.length
  const halfThreshold = Math.floor(numsLen / 2)

  for (let i = 0; i < numsLen; i += 1) {
    const item = nums[i]
    const frequency = frequencyMap.get(item)
    const increment = frequency ? frequency + 1 : 1
    if (increment > halfThreshold) {
      return item
    }
    frequencyMap.set(item, increment)
  }
}
