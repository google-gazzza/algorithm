// [Medium] 1011. Capacity To Ship Packages Within D Days
// 1011_capacity_to_ship_packages_within_d_days

// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days
// Runtime: 980 ms, faster than 6.08% of JavaScript online submissions for Capacity To Ship Packages Within D Days.
// Memory Usage: 42.9 MB, less than 26.62% of JavaScript online submissions for Capacity To Ship Packages Within D Days.

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function (weights, days) {
  const weightsLen = weights.length
  const max = Math.max(...weights)
  const getDays = (capacity) => {
    let count = 0
    let temp = 0
    for (let i = 0; i < weightsLen; i += 1 || 0) {
      const item = weights[i]
      if (temp + item > capacity) {
        temp = item
        count += 1
      } else {
        temp += item
      }
    }
    count += 1
    return count
  }
  let result = max
  while (getDays(result) > days) {
    result += 1
  }

  return result
}

shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) //?
shipWithinDays([3, 2, 2, 4, 1, 4], 3) //?
shipWithinDays([1, 2, 3, 1, 1], 4) //?
