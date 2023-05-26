// [Easy] 107. Binary Tree Level Order Traversal II
// 107_binary_tree_level_order_traversal_ii

// https://leetcode.com/problems/binary-tree-level-order-traversal-ii
// Runtime: 68 ms, faster than 96.12% of JavaScript online submissions for Binary Tree Level Order Traversal II.
// Memory Usage: 38.6 MB, less than 14.29% of JavaScript online submissions for Binary Tree Level Order Traversal II.
const levelOrderBottom = root => {
  const levelMap = new Map()
  const dfs = (node, level = 0) => {
    if (node === null) {
      return
    }
    if (levelMap.has(level)) {
      levelMap.get(level).push(node.val)
    } else {
      levelMap.set(level, [node.val])
    }
    level += 1
    dfs(node.left, level)
    dfs(node.right, level)
  }
  dfs(root)

  return [...levelMap].map(item => item[1]).reverse()
}
