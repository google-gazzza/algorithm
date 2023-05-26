// [Medium] 328. Odd Even Linked List
// 328_odd_even_linked_list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// https://leetcode.com/problems/odd-even-linked-list
// Runtime: 80 ms, faster than 55.89% of JavaScript online submissions for Odd Even Linked List.
// Memory Usage: 37.8 MB, less than 13.64% of JavaScript online submissions for Odd Even Linked List.
const oddEvenList = head => {
  if (head === null || head.next === null || head.next.next === null) {
    return head
  }
  const resumeNode = head.next
  let firstNode = head
  let secondNode = resumeNode

  while (firstNode !== null && secondNode !== null && secondNode.next !== null) {
    firstNode.next = secondNode.next
    firstNode = firstNode.next
    secondNode.next = firstNode.next
    secondNode = secondNode.next
  }
  firstNode.next = resumeNode

  return head
}
