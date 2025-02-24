// [Easy] 257. Binary Tree Paths
// 257_binary_tree_paths

// https://leetcode.com/problems/binary-tree-paths
// Runtime: 76 ms, faster than 89.25% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 40.5 MB, less than 5.52% of JavaScript online submissions for Binary Tree Paths.
const binaryTreePaths = root => {
  const resultArr = []
  const dfs = (node, accStr = '') => {
    if (node === null) {
      return
    }
    const newStr = accStr === '' ? `${node.val}` : `${accStr}->${node.val}`
    if (node.left === null && node.right === null) {
      resultArr.push(newStr)
    }
    dfs(node.left, newStr)
    dfs(node.right, newStr)
  }
  dfs(root)

  return resultArr
}
