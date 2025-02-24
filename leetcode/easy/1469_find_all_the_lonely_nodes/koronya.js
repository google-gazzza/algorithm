// [Easy] 1469. Find All The Lonely Nodes
// 1469_find_all_the_lonely_nodes

// https://leetcode.com/problems/find-all-the-lonely-nodes
// Runtime: 92 ms, faster than 76.00% of JavaScript online submissions for Find All The Lonely Nodes.
// Memory Usage: 43.8 MB, less than 37.33% of JavaScript online submissions for Find All The Lonely Nodes.

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
const getLonelyNodes = function (root) {
  const resultArr = []
  const dfs = (node) => {
    if (node == null) {
      return
    }
    const nodeLeft = node.left
    const nodeRight = node.right
    if (nodeLeft == null && nodeRight != null) {
      resultArr.push(nodeRight.val)
      dfs(nodeRight)
    } else if (nodeLeft != null && nodeRight == null) {
      resultArr.push(nodeLeft.val)
      dfs(nodeLeft)
    } else {
      dfs(nodeLeft)
      dfs(nodeRight)
    }
  }
  dfs(root)

  return resultArr
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// const root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.right = new TreeNode(3)
// root.left.right = new TreeNode(4)

const root = new TreeNode(7)
root.left = new TreeNode(1)
root.left.left = new TreeNode(6)
root.right = new TreeNode(4)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(3)
root.right.right.right = new TreeNode(2)

// getLonelyNodes(root) //?

const root2 = new TreeNode(31)
root2.right = new TreeNode(78)
root2.right.right = new TreeNode(28)

getLonelyNodes(root2) //?
