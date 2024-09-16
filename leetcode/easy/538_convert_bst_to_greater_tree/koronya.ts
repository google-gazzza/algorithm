// [Easy] 538. Convert BST to Greater Tree
// 538_convert_bst_to_greater_tree

// https://leetcode.com/problems/convert-bst-to-greater-tree
// Runtime: 444 ms, faster than 7.32% of TypeScript online submissions for Convert BST to Greater Tree.
// Memory Usage: 48.3 MB, less than 57.32% of TypeScript online submissions for Convert BST to Greater Tree.

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root: TreeNode | null): TreeNode | null {
  const originalValArr: number[] = []
  const setOriginalValArr = (node) => {
    if (node !== null) {
      setOriginalValArr(node.left)
      setOriginalValArr(node.right)
      originalValArr.push(node.val)
    }
  }
  const getSumOfGreaterThanNum = (num: number): number => originalValArr.filter((val) => val >= num).reduce((acc, cur) => acc + cur, 0)
  const modifyNode = (node: TreeNode | null) => {
    if (node !== null) {
      modifyNode(node.left)
      modifyNode(node.right)
      node.val = getSumOfGreaterThanNum(node.val)
    }
  }

  setOriginalValArr(root)
  originalValArr.sort((a, b) => a - b)
  modifyNode(root)

  return root
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

const root = new TreeNode(4)
root.left = new TreeNode(1)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(3)
root.right = new TreeNode(6)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)
root.right.right.right = new TreeNode(8)

convertBST(root) //?
