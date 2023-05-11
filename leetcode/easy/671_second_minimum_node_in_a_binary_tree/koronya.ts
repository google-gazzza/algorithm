// [Easy] 671. Second Minimum Node In a Binary Tree
// 671_second_minimum_node_in_a_binary_tree

// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree
// Runtime: 80 ms, faster than 82.61% of TypeScript online submissions for Second Minimum Node In a Binary Tree.
// Memory Usage: 39.4 MB, less than 17.39% of TypeScript online submissions for Second Minimum Node In a Binary Tree.

function findSecondMinimumValue(root: TreeNode | null): number {
  const candidateSet = new Set<number>()
  const postOrderTraversal = (node: TreeNode | null): void => {
    if (node === null) {
      return
    }
    postOrderTraversal(node.left)
    postOrderTraversal(node.right)
    const val: number = node.val
    if (candidateSet.has(val) === false) {
      candidateSet.add(val)
    }
  }
  postOrderTraversal(root)

  const arr: number[] = [...candidateSet].sort((a, b) => a - b)
  return arr.length === 1 ? -1 : arr[1]
}

// const root = new TreeNode(2)
// root.left = new TreeNode(2)
// root.right = new TreeNode(5)
// root.right.left = new TreeNode(5)
// root.right.right = new TreeNode(7)

// findSecondMinimumValue(root) //?

// const root = new TreeNode(2)
// root.left = new TreeNode(2)
// root.right = new TreeNode(2)

// findSecondMinimumValue(root) //?


