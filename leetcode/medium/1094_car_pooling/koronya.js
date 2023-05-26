// [Medium] 1094. Car Pooling
// 1094_car_pooling

// https://leetcode.com/problems/car-pooling
// Runtime: 124 ms, faster than 11.84% of JavaScript online submissions for Car Pooling.
// Memory Usage: 40.7 MB, less than 53.95% of JavaScript online submissions for Car Pooling.

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

const carPooling = function (trips, capacity) {
  const pointMap = new Map()
  const tripsLen = trips.length
  for (let i = 0; i < tripsLen; i += 1 || 0) {
    const trip = trips[i]
    const [count, start, end] = trip
    for (let num = start; num < end; num += 1 || 0) {
      const newCount = (pointMap.get(num) || 0) + count
      if (newCount > capacity) {
        return false
      }
      pointMap.set(num, newCount)
    }
  }
  return true
}
