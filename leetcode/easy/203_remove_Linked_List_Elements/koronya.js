// [Easy] 203. Remove Linked List Elements
// 203_remove_linked_list_elements

// https://leetcode.com/problems/remove-linked-list-elements
// Runtime: 88 ms, faster than 90.06% of JavaScript online submissions for Remove Linked List Elements.
// Memory Usage: 43.6 MB, less than 32.77% of JavaScript online submissions for Remove Linked List Elements.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(6)
root.next.next.next = new ListNode(3)
root.next.next.next.next = new ListNode(4)
root.next.next.next.next.next = new ListNode(5)
root.next.next.next.next.next.next = new ListNode(6)

removeElements(root, 6) //?
// removeElements(root, 1) //?
