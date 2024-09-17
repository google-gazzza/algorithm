// [Easy] 237. Delete Node in a Linked List
// 237_delete_node_in_a_linked_list

// https://leetcode.com/problems/delete-node-in-a-linked-list
// Runtime: 72 ms, faster than 69.57% of JavaScript online submissions for Delete Node in a Linked List.
// Memory Usage: 38 MB, less than 60.34% of JavaScript online submissions for Delete Node in a Linked List.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = node => {
  node.val = node.next.val
  node.next = node.next.next
}
