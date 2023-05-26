// [Medium] 1791. Find Center of Star Graph
// 1791_find_center_of_star_graph

// https://leetcode.com/problems/find-center-of-star-graph/
// Runtime: 136 ms, faster than 100.00% of TypeScript online submissions for Find Center of Star Graph.
// Memory Usage: 56.6 MB, less than 100.00% of TypeScript online submissions for Find Center of Star Graph.

function findCenter(edges: number[][]): number {
  return [edges[0][0], edges[0][1]].includes(edges[1][0]) ? edges[1][0] : edges[1][1]
}

findCenter([
  [1, 2],
  [2, 3],
  [4, 2],
]) //?

findCenter([
  [1, 2],
  [5, 1],
  [1, 3],
  [1, 4],
]) //?
