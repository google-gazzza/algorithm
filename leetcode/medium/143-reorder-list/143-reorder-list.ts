/*
143-reorder-list
leetcode/medium/143. Reorder List
URL: https://leetcode.com/problems/reorder-list/

NOTE: Description
NOTE: Constraints
  - The number of nodes in the list is in the range [1, 5 * 104].
  - 1 <= Node.val <= 1000 

NOTE: Explanation
NOTE: Reference
*/

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  const stack: ListNode[] = [];

  while (head) {
    stack.push(head);
    head = head.next;
  }

  let cursor: ListNode = stack.shift();

  while (stack.length > 1) {
    const right = stack.pop();
    const left = stack.shift();

    cursor.next = right;
    right.next = left;
    cursor = left;
  }

  if (stack.length === 1) {
    cursor.next = stack.pop();
    cursor = cursor.next;
  }

  cursor.next = null;
}