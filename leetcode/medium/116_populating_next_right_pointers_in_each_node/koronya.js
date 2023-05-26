// [Medium] 116. Populating Next Right Pointers in Each Node
// 116_populating_next_right_pointers_in_each_node

// https://leetcode.com/problems/populating-next-right-pointers-in-each-node
// Runtime: 92 ms, faster than 95.56% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
// Memory Usage: 45.6 MB, less than 27.10% of JavaScript online submissions for Populating Next Right Pointers in Each Node.

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
  const preOrderTraversal = (node) => {
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

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.next = next === undefined ? null : next
}

const root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)

connect(root) //?
