// [Easy] 783. Minimum Distance Between BST Nodes
// 783_minimum_distance_between_bst_nodes

// https://leetcode.com/problems/minimum-distance-between-bst-nodes
// Runtime: 80 ms, faster than 93.33% of TypeScript online submissions for Minimum Distance Between BST Nodes.
// Memory Usage: 40.3 MB, less than 66.67% of TypeScript online submissions for Minimum Distance Between BST Nodes.
function minDiffInBST (root: TreeNode | null): number {
  const sortedArr: number[] = []
  const inOrderTraversal = (node: TreeNode | null) => {
    if (node === null) {
      return
    }
    inOrderTraversal(node.left)
    sortedArr.push(node.val)
    inOrderTraversal(node.right)
  }
  inOrderTraversal(root)
  const sortedArrLen: number = sortedArr.length
  let minDiff: number = Number.MAX_SAFE_INTEGER
  for (let i: number = 1; i < sortedArrLen; i += 1) {
    minDiff = Math.min(sortedArr[i] - sortedArr[i - 1], minDiff)
  }

  return minDiff
}
