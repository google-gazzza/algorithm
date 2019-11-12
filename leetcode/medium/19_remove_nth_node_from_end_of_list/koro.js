// https://leetcode.com/problems/remove-nth-node-from-end-of-list
// Runtime: 60 ms, faster than 59.18% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Remove Nth Node From End of List.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const getLengthOfList = list => {
  let length = 1
  while (list.next) {
    list = list.next
    length += 1
  }
  return length
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let count = 0
  const matchIndex = getLengthOfList(head) - n

  if (matchIndex === 0) {
    head = head.next
    return head
  }

  let otherHead = head
  while (matchIndex !== count + 1) {
    otherHead = otherHead.next
    count += 1
  }
  otherHead.next = otherHead.next.next

  return head
}
