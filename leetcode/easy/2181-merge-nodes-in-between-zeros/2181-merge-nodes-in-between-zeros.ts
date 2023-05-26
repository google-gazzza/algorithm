/*
2181-merge-nodes-in-between-zeros
leetcode/easy/2181. Merge Nodes in Between Zeros
Difficulty: easy
URL: https://leetcode.com/problems/merge-nodes-in-between-zeros/

NOTE: Description

NOTE: Constraints
  - The number of nodes in the list is in the range [3, 2 * 105].
  - 0 <= Node.val <= 1000
  - There are no two consecutive nodes with Node.val == 0.
  - The beginning and end of the linked list have Node.val == 0.

NOTE: Explanation
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

function mergeNodes(head: ListNode | null): ListNode | null {
  let cursor = head;

  while (cursor) {
    while (cursor.next && cursor.next?.val !== 0) {
      cursor.val += cursor.next.val;
      cursor.next = cursor.next.next;
    }

    if (cursor.next.next === null) {
      cursor.next = null;
    }
    cursor = cursor.next;
  }

  return head;
};
