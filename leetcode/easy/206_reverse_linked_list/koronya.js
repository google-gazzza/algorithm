// https://leetcode.com/problems/reverse-linked-list
// Runtime: 48 ms, faster than 98.66% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 35 MB, less than 58.70% of JavaScript online submissions for Reverse Linked List.
const reverseList = head => {
  let prev = null
  let now = head

  while (now !== null) {
    const nextTarget = now.next
    now.next = prev
    prev = now
    now = nextTarget
  }

  return prev
}
