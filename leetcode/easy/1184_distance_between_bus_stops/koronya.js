// [Easy] 1184. Distance Between Bus Stops
// 1184_distance_between_bus_stops

// https://leetcode.com/problems/distance-between-bus-stops
// Runtime: 72 ms, faster than 92.24% of JavaScript online submissions for Distance Between Bus Stops.
// Memory Usage: 38.8 MB, less than 6.90% of JavaScript online submissions for Distance Between Bus Stops.
const distanceBetweenBusStops = function (distance, start, destination) {
  const sumOfDistance = distance.reduce((acc, cur) => acc + cur, 0)
  let busStart = start
  let busEnd = destination
  let candidate = 0
  if (start > destination) {
    busStart = destination
    busEnd = start
  }
  for (let i = busStart; i < busEnd; i += 1 || 0) {
    candidate += distance[i]
  }

  return Math.min(candidate, sumOfDistance - candidate)
}
