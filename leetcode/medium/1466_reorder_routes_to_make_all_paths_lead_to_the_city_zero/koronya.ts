// [Medium] 1466. Reorder Routes to Make All Paths Lead to the City Zero
// 1466_reorder_routes_to_make_all_paths_lead_to_the_city_zero

// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero
// Runtime: 376 ms, faster than 88.89% of TypeScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.
// Memory Usage: 103.3 MB, less than 77.78% of TypeScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.

function minReorder(n: number, connections: number[][]): number {
  const forwardMap = new Map<number, number[]>()
  const backwardMap = new Map<number, number[]>()
  const visitedSet = new Set<number>()
  connections.forEach(([from, to]) => {
    if (forwardMap.has(from)) {
      forwardMap.get(from)!.push(to)
    } else {
      forwardMap.set(from, [to])
    }
    if (backwardMap.has(to)) {
      backwardMap.get(to)!.push(from)
    } else {
      backwardMap.set(to, [from])
    }
  })

  let count: number = 0
  let targets: number[] = [0]
  visitedSet.add(0)
  while (targets.length > 0) {
    const item = targets.shift()!
    if (forwardMap.has(item) === true) {
      const items = forwardMap.get(item)!
      items.forEach((item) => {
        if (visitedSet.has(item) === false) {
          count += 1
          visitedSet.add(item)
          targets.push(item)
        }
      })
    }
    if (backwardMap.has(item) === true) {
      const items = backwardMap.get(item)!
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
