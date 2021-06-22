// [Medium] 669. Trim a Binary Search Tree
// 669_trim_a_binary_search_tree

// https://leetcode.com/problems/trim-a-binary-search-tree/submissions/
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Trim a Binary Search Tree.
// Memory Usage: 45.2 MB, less than 75.00% of TypeScript online submissions for Trim a Binary Search Tree.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  const inOrderTraversal = (node: TreeNode | null, parent = null) => {
    if (node === null) {
      return
    }
    const nodeVal: number = node.val
    let parentNode = node
    if (nodeVal < low) {
      node.left = null
      if (parent !== null) {
        parent.left = node.right
        parentNode = parent
      } else {
        root = node.right
        parentNode = null
      }
    } else if (nodeVal > high) {
      node.right = null
      if (parent !== null) {
        parent.right = node.left
        parentNode = parent
      } else {
        root = node.left
        parentNode = null
      }
    }
    inOrderTraversal(node.left, parentNode)
    inOrderTraversal(node.right, parentNode)
  }
  inOrderTraversal(root)

  return root
}

// const root = new TreeNode(1)
// root.left = new TreeNode(0)
// root.right = new TreeNode(2)

// trimBST(root, 1, 2) //?

// const root2 = new TreeNode(3)
// root2.left = new TreeNode(0)
// root2.right = new TreeNode(4)
// root2.left.right = new TreeNode(2)
// root2.left.right.left = new TreeNode(1)

// trimBST(root2, 1, 3) //?

// const root = new TreeNode(1)
// root.right = new TreeNode(2)

// trimBST(root, 2, 4) //?

// const root = new TreeNode(3)
// root.left = new TreeNode(1)
// root.left.right = new TreeNode(2)
// root.right = new TreeNode(4)

// trimBST(root, 3, 4) //?

// const root = new TreeNode(3)
// root.left = new TreeNode(2)
// root.right = new TreeNode(4)
// root.left.left = new TreeNode(1)

// trimBST(root, 1, 1) //?

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(5)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)

trimBST(root, 3, 5) //?
