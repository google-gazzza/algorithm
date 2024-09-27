// [Medium] 11. Container With Most Water
// 11_container_with_most_water

// https://leetcode.com/problems/container-with-most-water
// Runtime: 616 ms, faster than 27.34% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 36.9 MB, less than 25.84% of JavaScript online submissions for Container With Most Water.
const getWater = (left, right, value) => (right - left) * value

const maxArea = height => {
  const heightLen = height.length
  let maxHeight = 0
  for (let left = 0; left < heightLen; left = left + 1 | 0) {
    let leftValue = height[left]
    for (let right = left + 1; right < heightLen; right = right + 1 | 0) {
      let rightValue = height[right]
      maxHeight = Math.max(getWater(left, right, Math.min(leftValue, rightValue)), maxHeight)
    }
  }

  return maxHeight
}
