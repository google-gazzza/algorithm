// [Medium] 1466. Reorder Routes to Make All Paths Lead to the City Zero
// 1466_reorder_routes_to_make_all_paths_lead_to_the_city_zero

// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero
// Runtime: 435 ms, faster than 83.66% of JavaScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.
// Memory Usage: 119 MB, less than 39.22% of JavaScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function (n, connections) {
  const forwardMap = new Map()
  const backwardMap = new Map()
  const visitedSet = new Set()
  connections.forEach(([from, to]) => {
    if (forwardMap.has(from)) {
      forwardMap.get(from).push(to)
    } else {
      forwardMap.set(from, [to])
    }
    if (backwardMap.has(to)) {
      backwardMap.get(to).push(from)
    } else {
      backwardMap.set(to, [from])
    }
  })

  let count = 0
  let targets = [0]
  visitedSet.add(0)
  while (targets.length > 0) {
    const item = targets.shift()
    if (forwardMap.has(item) === true) {
      const items = forwardMap.get(item)
      items.forEach((item) => {
        if (visitedSet.has(item) === false) {
          count += 1
          visitedSet.add(item)
          targets.push(item)
        }
      })
    }
    if (backwardMap.has(item) === true) {
      const items = backwardMap.get(item)
      items.forEach((item) => {
        if (visitedSet.has(item) === false) {
          visitedSet.add(item)
          targets.push(item)
        }
      })
    }
  }

  return count
}

minReorder(6, [
  [0, 1],
  [1, 3],
  [2, 3],
  [4, 0],
  [4, 5],
])
minReorder(5, [
  [1, 0],
  [1, 2],
  [3, 2],
  [3, 4],
])

minReorder(3, [
  [1, 0],
  [2, 0],
])
