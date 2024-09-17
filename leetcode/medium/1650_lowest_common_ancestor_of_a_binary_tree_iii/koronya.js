// [Medium] 1650. Lowest Common Ancestor of a Binary Tree III
// 1650_lowest_common_ancestor_of_a_binary_tree_iii

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii
// Runtime: 76 ms, faster than 99.15% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree III.
// Memory Usage: 44.2 MB, less than 16.10% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree III.

/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const lowestCommonAncestor = function (p, q) {
  const candidates = new Set()
  let target = p
  while (target) {
    candidates.add(target)
    target = target.parent
  }

  target = q
  while (target) {
    if (candidates.has(target)) {
      return target
    }
    target = target.parent
  }
}

function Node(val) {
  this.val = val
  this.left = null
  this.right = null
  this.parent = null
}

const node0 = new Node(0)
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
const node7 = new Node(7)
const node8 = new Node(8)
const node9 = new Node(9)

const root = node3
root.left = node5
root.left.parent = node3

root.left.left = node6
root.left.left.parent = node5

root.left.right = node2
root.left.right.parent = node5

root.left.right.left = node7
root.left.right.left.parent = node2

root.left.right.right = node4
root.left.right.right.parent = node2

root.right = node1
root.right.parent = node3

root.right.left = node0
root.right.left.parent = node1

root.right.right = node8
root.right.right.parent = node1

lowestCommonAncestor(node5, node1) //?
