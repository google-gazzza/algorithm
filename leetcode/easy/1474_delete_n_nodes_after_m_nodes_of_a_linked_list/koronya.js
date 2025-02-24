// [Easy] 1474. Delete N Nodes After M Nodes of a Linked List
// 1474_delete_n_nodes_after_m_nodes_of_a_linked_list

// https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list
// Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Delete N Nodes After M Nodes of a Linked List.
// Memory Usage: 44.1 MB, less than 30.51% of JavaScript online submissions for Delete N Nodes After M Nodes of a Linked List.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const deleteNodes = function (head, m, n) {
  const initM = m
  const initN = n
  let prev = head
  let target = head.next
  m -= 1

  while (target) {
    if (m === 0 && n === 0) {
      m = initM
      n = initN
    } else {
      if (m > 0) {
        m -= 1
        prev = target
        target = target.next
      } else {
        n -= 1
        target = target.next
        prev.next = target
      }
    }
  }

  return head
}
