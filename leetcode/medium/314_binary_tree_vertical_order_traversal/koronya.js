// [Medium] 314. Binary Tree Vertical Order Traversal
// 314_binary_tree_vertical_order_traversal

// https://leetcode.com/problems/binary-tree-vertical-order-traversal
// Runtime: 63 ms, faster than 94.72% of JavaScript online submissions for Binary Tree Vertical Order Traversal.
// Memory Usage: 44.1 MB, less than 43.31% of JavaScript online submissions for Binary Tree Vertical Order Traversal.

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
 * @return {number[][]}
 */
const verticalOrder = function (root) {
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  const numMap = new Map()
  const inOrderTraversal = (node, index = 0, level = 0) => {
    if (node == null) {
      return
    }
    min = Math.min(min, index)
    max = Math.max(max, index)
    const val = node.val
    if (numMap.has(index) === true) {
      numMap.get(index).push({ val, level })
    } else {
      numMap.set(index, [{ val, level }])
    }
    level += 1
    inOrderTraversal(node.left, index - 1, level)
    inOrderTraversal(node.right, index + 1, level)
  }
  inOrderTraversal(root)
  const resultArr = []
  for (let i = min; i <= max; i += 1 || 0) {
    resultArr.push(
      numMap
        .get(i)
        .sort((a, b) => a.level - b.level)
        .map((item) => item.val),
    )
  }

  return resultArr
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// const root = new TreeNode(3)
// root.left = new TreeNode(9)
// root.right = new TreeNode(20)
// root.right.left = new TreeNode(15)
// root.right.right = new TreeNode(7)

// verticalOrder(root)

// const root2 = new TreeNode(3)
// root2.left = new TreeNode(9)
// root2.left.left = new TreeNode(4)
// root2.left.right = new TreeNode(0)
// root2.right = new TreeNode(8)
// root2.right.left = new TreeNode(1)
// root2.right.right = new TreeNode(7)

// verticalOrder(root2)

const root3 = new TreeNode(3)
root3.left = new TreeNode(9)
root3.left.left = new TreeNode(4)
root3.left.right = new TreeNode(0)
root3.left.right.right = new TreeNode(2)
root3.right = new TreeNode(8)
root3.right.left = new TreeNode(1)
root3.right.left.left = new TreeNode(5)
root3.right.right = new TreeNode(7)

verticalOrder(root3)
