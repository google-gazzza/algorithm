// [Medium] 2079. Watering Plants
// 2079_watering_plants

// https://leetcode.com/problems/watering-plants
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Watering Plants.
// Memory Usage: 41 MB, less than 35.71% of TypeScript online submissions for Watering Plants.

function wateringPlants(plants: number[], capacity: number): number {
  const plantsLen: number = plants.length
  let prev: number = -1
  let next: number = 0
  let water: number = capacity
  let step: number = 0
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
