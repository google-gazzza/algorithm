// [Medium] 1650. Lowest Common Ancestor of a Binary Tree III
// 1650_lowest_common_ancestor_of_a_binary_tree_iii

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii
// Runtime: 88 ms, faster than 94.44% of TypeScript online submissions for Lowest Common Ancestor of a Binary Tree III.
// Memory Usage: 45.1 MB, less than 8.33% of TypeScript online submissions for Lowest Common Ancestor of a Binary Tree III.


/**
 * Definition for a binary tree node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     parent: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null, parent?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.parent = (parent===undefined ? null : parent)
 *     }
 * }
 */

function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
  const candidates = new Set<Node>()
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
