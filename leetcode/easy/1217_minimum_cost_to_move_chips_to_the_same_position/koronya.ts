// [Easy] 1217. Minimum Cost to Move Chips to The Same Position
// 1217_minimum_cost_to_move_chips_to_the_same_position

// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position
// Runtime: 80 ms, faster than 66.67% of TypeScript online submissions for Minimum Cost to Move Chips to The Same Position.
// Memory Usage: 38.7 MB, less than 100.00% of TypeScript online submissions for Minimum Cost to Move Chips to The Same Position.
const isEven = (num: number): boolean => num % 2 === 0
function minCostToMoveChips(position: number[]): number {
  let evenCount: number = 0
  let oddCount: number = 0
  position.forEach((num: number) => (isEven(num) === true ? (evenCount += 1) : (oddCount += 1)))
  return Math.min(evenCount, oddCount)
}
