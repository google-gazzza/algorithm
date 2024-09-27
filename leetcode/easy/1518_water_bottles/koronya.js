// [Easy] 1518. Water Bottles
// 1518_water_bottles

// https://leetcode.com/problems/water-bottles
// Runtime: 68 ms, faster than 89.96% of JavaScript online submissions for Water Bottles.
// Memory Usage: 38.5 MB, less than 5.21% of JavaScript online submissions for Water Bottles.
const numWaterBottles = (numBottles, numExchange) => {
  let result = 0
  let emptyBottles = 0
  let drinkBottles = numBottles
  while (drinkBottles > 0) {
    result += drinkBottles
    emptyBottles += drinkBottles
    drinkBottles = Math.floor(emptyBottles / numExchange)
    emptyBottles = emptyBottles % numExchange
  }

  return result
}
