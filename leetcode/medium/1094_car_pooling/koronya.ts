// [Medium] 1094. Car Pooling
// 1094_car_pooling

// https://leetcode.com/problems/car-pooling
// Runtime: 132 ms, faster than 33.33% of TypeScript online submissions for Car Pooling.
// Memory Usage: 40.4 MB, less than 100.00% of TypeScript online submissions for Car Pooling.

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

function carPooling(trips: number[][], capacity: number): boolean {
  const pointMap = new Map<number, number>()
  const tripsLen: number = trips.length
  for (let i: number = 0; i < tripsLen; i += 1) {
    const trip: number[] = trips[i]
    const [count, start, end] = trip
    for (let num: number = start; num < end; num += 1) {
      const newCount: number = (pointMap.get(num) || 0) + count
      if (newCount > capacity) {
        return false
      }
      pointMap.set(num, newCount)
    }
  }
  return true
}
