// [Easy] 1217. Minimum Cost to Move Chips to The Same Position
// 1217_minimum_cost_to_move_chips_to_the_same_position

// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position
// Runtime: 76 ms, faster than 83.96% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
// Memory Usage: 38.6 MB, less than 46.70% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
const isEven = (num) => num % 2 === 0
const minCostToMoveChips = function (position) {
  let evenCount = 0
  let oddCount = 0
  position.forEach((num) => (isEven(num) === true ? (evenCount += 1) : (oddCount += 1)))
  return Math.min(evenCount, oddCount)
}
