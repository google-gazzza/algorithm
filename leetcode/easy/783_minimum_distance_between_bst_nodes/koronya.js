// [Easy] 783. Minimum Distance Between BST Nodes
// 783_minimum_distance_between_bst_nodes

// https://leetcode.com/problems/minimum-distance-between-bst-nodes
// Runtime: 80 ms, faster than 68.70% of JavaScript online submissions for Minimum Distance Between BST Nodes.
// Memory Usage: 39.2 MB, less than 62.60% of JavaScript online submissions for Minimum Distance Between BST Nodes.
const minDiffInBST = function (root) {
  const sortedArr = []
  const inOrderTraversal = (node) => {
    if (node === null) {
      return
    }
    inOrderTraversal(node.left)
    sortedArr.push(node.val)
    inOrderTraversal(node.right)
  }
  inOrderTraversal(root)
  const sortedArrLen = sortedArr.length
  let minDiff = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < sortedArrLen; i += 1 || 0) {
    minDiff = Math.min(sortedArr[i] - sortedArr[i - 1], minDiff)
  }

  return minDiff
}
