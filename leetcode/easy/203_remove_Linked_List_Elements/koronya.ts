// [Easy] 203. Remove Linked List Elements
// 203_remove_linked_list_elements

// https://leetcode.com/problems/remove-linked-list-elements
// Runtime: 128 ms, faster than 29.17% of TypeScript online submissions for Remove Linked List Elements.
// Memory Usage: 43.9 MB, less than 93.23% of TypeScript online submissions for Remove Linked List Elements.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head == null) {
    return null
  }
  let prev = head
  let target = head.next
  while (target) {
    if (target.val === val) {
      prev.next = target.next
    } else {
      prev = target
    }
    target = target.next
  }
  if (head.val === val) {
    return head.next
  }
  return head
}
