// [Easy] 1971. Find if Path Exists in Graph
// 1971_find_if_path_exists_in_graph

// https://leetcode.com/problems/find-if-path-exists-in-graph
// Runtime: 552 ms, faster than 100.00% of TypeScript online submissions for Find if Path Exists in Graph.
// Memory Usage: 104.4 MB, less than 100.00% of TypeScript online submissions for Find if Path Exists in Graph.

function validPath(n: number, edges: number[][], start: number, end: number): boolean {
  const edgeMap = new Map<number, Set<number>>();
  edges.forEach((edge) => {
    const [v1, v2] = edge
    if (edgeMap.has(v1) === false) {
      edgeMap.set(v1, new Set([v2]))
    } else {
      edgeMap.get(v1)!.add(v2)
    }
    if (edgeMap.has(v2) === false) {
      edgeMap.set(v2, new Set([v1]))
    } else {
      edgeMap.get(v2)!.add(v1)
    }
  })
  const visitedSet = new Set<number>([start])
  if (edgeMap.size === 0) {
    return true
  }
  if (edgeMap.get(start) === undefined) {
    return false
  }
  const candidates: number[] = [...edgeMap.get(start)!]
  while (candidates.length > 0) {
    const item: number = candidates.shift()!
    visitedSet.add(item)
    if (item === end) {
      return true
    }
    const itemSet: Set<number> = edgeMap.get(item)!
    if (itemSet !== undefined) {
      itemSet.forEach((d) => {
        if (visitedSet.has(d) === false) {
          candidates.push(d)
        }
      })
    }
  }
  return false
}

// validPath(
//   3,
//   [
//     [0, 1],
//     [1, 2],
//     [2, 0],
//   ],
//   0,
//   2,
// ) //?

// validPath(
//   6,
//   [
//     [0, 1],
//     [0, 2],
//     [3, 5],
//     [5, 4],
//     [4, 3],
//   ],
//   0,
//   5,
// ) //?

// validPath(1, [], 0, 0) //?
validPath(
  10,
  [
    [0, 7],
    [0, 8],
    [6, 1],
    [2, 0],
    [0, 4],
    [5, 8],
    [4, 7],
    [1, 3],
    [3, 5],
    [6, 5],
  ],
  7,
  5,
) //?
