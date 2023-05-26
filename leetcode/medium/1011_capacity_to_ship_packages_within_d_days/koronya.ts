// [Medium] 1011. Capacity To Ship Packages Within D Days
// 1011_capacity_to_ship_packages_within_d_days

// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days
// Runtime: 952 ms, faster than 6.25% of TypeScript online submissions for Capacity To Ship Packages Within D Days.
// Memory Usage: 42.9 MB, less than 50.00% of TypeScript online submissions for Capacity To Ship Packages Within D Days.

function shipWithinDays(weights: number[], days: number): number {
  const weightsLen = weights.length
  const max = Math.max(...weights)
  const getDays = (capacity: number): number => {
    let count: number = 0
    let temp: number = 0
    for (let i: number = 0; i < weightsLen; i += 1) {
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
  let result: number = max
  while (getDays(result) > days) {
    result += 1
  }

  return result
}

shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) //?
shipWithinDays([3, 2, 2, 4, 1, 4], 3) //?
shipWithinDays([1, 2, 3, 1, 1], 4) //?
