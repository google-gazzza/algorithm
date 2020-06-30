// [Easy] 437. Path Sum III
// 437_path_sum_iii

// https://leetcode.com/problems/path-sum-iii
// Runtime: 92 ms, faster than 65.13% of JavaScript online submissions for Path Sum III.
// Memory Usage: 39.7 MB, less than 27.93% of JavaScript online submissions for Path Sum III.
const dfs = (node, remainder) => {
  if (node === null) {
    return 0
  }
  const value = node.val
  const count = node.val === remainder ? 1 : 0
  return count + dfs(node.left, remainder - value) + dfs(node.right, remainder - value)
}

const pathSum = (root, sum) => {
  if (root === null) {
    return 0
  }
  return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}

// Runtime: 128 ms, faster than 18.86% of JavaScript online submissions for Path Sum III.
// Memory Usage: 40.4 MB, less than 25.17% of JavaScript online submissions for Path Sum III.
const pathSum2 = (root, sum) => {
  let resultCount = 0
  const visitedSet = new Set()
  const dfs = (node, accSum = 0, count = 0) => {
    if (node === null) {
      return
    }
    const newSum = accSum + node.val
    count += 1
    if (newSum === sum) {
      resultCount += 1
    }
    dfs(node.left, newSum, count)
    dfs(node.right, newSum, count)

    if (count > 1 && !visitedSet.has(node)) {
      const newSum2 = node.val
      visitedSet.add(node)
      if (newSum2 === sum) {
        resultCount += 1
      }
      dfs(node.left, newSum2)
      dfs(node.right, newSum2)
    }
  }
  dfs(root)

  return resultCount
}
