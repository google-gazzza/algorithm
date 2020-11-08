// [Easy] 1184. Distance Between Bus Stops
// 1184_distance_between_bus_stops

// https://leetcode.com/problems/distance-between-bus-stops
// Runtime: 80 ms, faster than 40.00% of TypeScript online submissions for Distance Between Bus Stops.
// Memory Usage: 40.2 MB, less than 60.00% of TypeScript online submissions for Distance Between Bus Stops.
const distanceBetweenBusStops = function (distance: number[], start: number, destination: number): number {
  const sumOfDistance: number = distance.reduce((acc, cur) => acc + cur, 0)
  let busStart: number = start
  let busEnd: number = destination
  let candidate: number = 0
  if (start > destination) {
    busStart = destination
    busEnd = start
  }
  for (let i = busStart; i < busEnd; i += 1 || 0) {
    candidate += distance[i]
  }

  return Math.min(candidate, sumOfDistance - candidate)
}
