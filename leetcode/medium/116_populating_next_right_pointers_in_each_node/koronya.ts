// [Medium] 116. Populating Next Right Pointers in Each Node
// 116_populating_next_right_pointers_in_each_node

// https://leetcode.com/problems/populating-next-right-pointers-in-each-node
// Runtime: 104 ms, faster than 60.34% of TypeScript online submissions for Populating Next Right Pointers in Each Node.
// Memory Usage: 45.6 MB, less than 72.41% of TypeScript online submissions for Populating Next Right Pointers in Each Node.

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  const preOrderTraversal = (node: Node | null): Node | null => {
    if (node === null || node.left === null) {
      return node
    }
    node.left.next = node.right
    node.right.next = node.next ? node.next.left : null
    connect(node.left)
    connect(node.right)

    return node
  }
  return preOrderTraversal(root)
}
