// [Easy] 226. Invert Binary Tree
// 226_invert_binary_tree

// https://leetcode.com/problems/invert-binary-tree
// Runtime: 72 ms, faster than 41.96% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 36.8 MB, less than 5.15% of JavaScript online submissions for Invert Binary Tree.
const invertTree = root => {
  const dfs = (node) => {
    if (node === null) {
      return
    }
    const left = node.left
    const right = node.right
    node.left = right
    node.right = left
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)

  return root
}
