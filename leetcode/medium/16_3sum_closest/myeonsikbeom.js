/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
Runtime : 88 ms
Memory : 43.6 MB
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let answer = nums[0] + nums[1] + nums[nums.length - 1]
  let beforeDiff = Math.abs(answer - target)

  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1,
      end = nums.length - 1
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end]
      let diff = Math.abs(sum - target)

      if (diff < beforeDiff) {
        answer = sum
        beforeDiff = diff
      }

      if (sum === target) {
        return sum
      } else if (sum > target) {
        end--
      } else {
        start++
      }
    }
  }

  return answer
}
