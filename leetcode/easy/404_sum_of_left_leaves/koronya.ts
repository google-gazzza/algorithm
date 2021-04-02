// [Easy] 404. Sum of Left Leaves
// 404_sum_of_left_leaves

// https://leetcode.com/problems/sum-of-left-leaves
// Runtime: 88 ms, faster than 57.58% of TypeScript online submissions for Sum of Left Leaves.
// Memory Usage: 40.9 MB, less than 24.24% of TypeScript online submissions for Sum of Left Leaves.

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum: number = 0
  const traversal = (node: TreeNode | null, isLeftChild: boolean = false) => {
    if (node === null) {
      return
    }
    const nodeVal: number = node.val
    if (node.left === null && node.right === null && isLeftChild === true) {
      sum += nodeVal
    }
    traversal(node.left, true)
    traversal(node.right)
  }
  traversal(root)

  return sum
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

sumOfLeftLeaves(root) //?
