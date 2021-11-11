// [Medium] 366. Find Leaves of Binary Tree
// 366_find_leaves_of_binary_tree

// https://leetcode.com/problems/find-leaves-of-binary-tree
// Runtime: 72 ms, faster than 79.16% of JavaScript online submissions for Find Leaves of Binary Tree.
// Memory Usage: 40.2 MB, less than 5.01% of JavaScript online submissions for Find Leaves of Binary Tree.

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
const findLeaves = function (root) {
  const levelMap = new Map()
  const dfs = (node) => {
    if (node == null) {
      return 0
    }
    const level = Math.max(dfs(node.left), dfs(node.right))
    if (levelMap.has(level)) {
      levelMap.get(level).push(node.val)
    } else {
      levelMap.set(level, [node.val])
    }
    return level + 1
  }
  dfs(root)

  return [...levelMap].map((item) => item[1])
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

findLeaves(root) //?
