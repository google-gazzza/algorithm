// [Easy] 606. Construct String from Binary Tree
// 606_construct_string_from_binary_tree

// https://leetcode.com/problems/construct-string-from-binary-tree
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Construct String from Binary Tree.
// Memory Usage: 45.3 MB, less than 33.33% of TypeScript online submissions for Construct String from Binary Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
function tree2str(t: TreeNode | null): string {
  let resultStr: string = ''
  const preOrderTraversal = (node: TreeNode | null): void => {
    if (node === null) {
      return
    }
    resultStr += `(${node.val}`
    const invalidLeftChild: boolean = node.left === null
    const invalidRightChild: boolean = node.right === null
    if (invalidLeftChild === true && invalidRightChild === false) {
      resultStr += '()'
    }
    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
    resultStr += ')'
  }
  preOrderTraversal(t)

  return resultStr.substring(1, resultStr.length - 1)
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
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.right = new TreeNode(3)

const root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.left.right = new TreeNode(4)
root2.right = new TreeNode(3)

tree2str(root) //?
tree2str(root2) //?
