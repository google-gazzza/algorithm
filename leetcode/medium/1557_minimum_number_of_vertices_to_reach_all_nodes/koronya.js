// [Medium] 1557. Minimum Number of Vertices to Reach All Nodes
// 1557_minimum_number_of_vertices_to_reach_all_nodes

// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes
// Runtime: 188 ms, faster than 85.59% of JavaScript online submissions for Minimum Number of Vertices to Reach All Nodes.
// Memory Usage: 62.5 MB, less than 89.83% of JavaScript online submissions for Minimum Number of Vertices to Reach All Nodes.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = function (n, edges) {
  const endSet = new Set()
  edges.forEach((edge) => {
    const [start, end] = edge
    if (endSet.has(end) === false) {
      endSet.add(end)
    }
  })
  const resultArr = []
  for (let i = 0; i < n; i += 1 || 0) {
    if (endSet.has(i) === false) {
      resultArr.push(i)
    }
  }

  return resultArr
}

findSmallestSetOfVertices(6, [
  [0, 1],
  [0, 2],
  [2, 5],
  [3, 4],
  [4, 2],
]) //?

findSmallestSetOfVertices(5, [
  [0, 1],
  [2, 1],
  [3, 1],
  [1, 4],
  [2, 4],
]) //?
