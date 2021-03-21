// [Medium] 145. Binary Tree Postorder Traversal
// 145_binary_tree_postorder_traversal

// https://leetcode.com/problems/binary-tree-postorder-traversal
// Runtime: 80 ms, faster than 90.32% of TypeScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 40.2 MB, less than 58.06% of TypeScript online submissions for Binary Tree Postorder Traversal.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root: TreeNode | null): number[] {
  let resultArr: number[] = []
  const postTraversal = (node: TreeNode | null) => {
    if (node !== null) {
      postTraversal(node.left)
      postTraversal(node.right)
      resultArr.push(node.val)
    }
  }
  postTraversal(root)

  return resultArr
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

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

postorderTraversal(root) //?
