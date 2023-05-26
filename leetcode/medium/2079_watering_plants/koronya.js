// [Medium] 2079. Watering Plants
// 2079_watering_plants

// https://leetcode.com/problems/watering-plants
// Runtime: 68 ms, faster than 96.59% of JavaScript online submissions for Watering Plants.
// Memory Usage: 39.1 MB, less than 22.44% of JavaScript online submissions for Watering Plants.

/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
const wateringPlants = function (plants, capacity) {
  const plantsLen = plants.length
  let prev = -1
  let next = 0
  let water = capacity
  let step = 0
  while (true) {
    step += next - prev
    water -= plants[next]
    prev = next
    next += 1
    if (next >= plantsLen) {
      break
    }
    if (plants[next] > water) {
      prev = -1
      step += next
      water = capacity
    }
  }

  return step
}

wateringPlants([2, 2, 3, 3], 5) //?
wateringPlants([1, 1, 1, 4, 2, 3], 4) //?
wateringPlants([7, 7, 7, 7, 7, 7, 7], 8) //?
wateringPlants([3, 2, 4, 2, 1], 6) //?
