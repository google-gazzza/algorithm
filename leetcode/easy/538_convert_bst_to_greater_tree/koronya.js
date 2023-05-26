// [Easy] 538. Convert BST to Greater Tree
// 538_convert_bst_to_greater_tree

// https://leetcode.com/problems/convert-bst-to-greater-tree
// Runtime: 408 ms, faster than 5.37% of JavaScript online submissions for Convert BST to Greater Tree.
// Memory Usage: 47.8 MB, less than 40.95% of JavaScript online submissions for Convert BST to Greater Tree.

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = function (root) {
  const originalValArr = []
  const setOriginalValArr = (node) => {
    if (node !== null) {
      setOriginalValArr(node.left)
      setOriginalValArr(node.right)
      originalValArr.push(node.val)
    }
  }
  const getSumOfGreaterThanNum = (num) => originalValArr.filter((val) => val >= num).reduce((acc, cur) => acc + cur, 0)
  const modifyNode = (node) => {
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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
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


