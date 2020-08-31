// [Easy] 559. Maximum Depth of N-ary Tree
// 559_maximum_depth_of_n-ary_tree

// https://leetcode.com/problems/maximum-depth-of-n-ary-tree
// Runtime: 84 ms, faster than 90.60% of JavaScript online submissions for Maximum Depth of N-ary Tree.
// Memory Usage: 39.4 MB, less than 46.47% of JavaScript online submissions for Maximum Depth of N-ary Tree.
const maxDepth = root => {
  let maxDepth = 0
  const dfs = (node, level = 1) => {
    if (!node) {
      return
    }
    maxDepth = Math.max(maxDepth, level)
    level += 1
    if (node.children) {
      node.children.map(child => {
        dfs(child, level)
      })
    }
  }
  dfs(root)

  return maxDepth
}
