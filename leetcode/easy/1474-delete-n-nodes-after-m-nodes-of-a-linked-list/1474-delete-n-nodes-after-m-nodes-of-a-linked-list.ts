/*
1474-delete-n-nodes-after-m-nodes-of-a-linked-list
leetcode/easy/1474. Delete N Nodes After M Nodes of a Linked List
Difficulty: easy
URL: https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/

NOTE: Description

NOTE: Constraints
 - The number of nodes in the list is in the range [1, 104].
 - 1 <= Node.val <= 106
 - 1 <= m, n <= 1000

NOTE: Explanation
*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}


function deleteNodes(head: ListNode | null, m: number, n: number): ListNode | null {
  let pointer = { next: head };

  while (pointer) {
    for (let i = 0; i < m; i += 1) {
      if (!pointer) {
        break;
      }
      pointer = pointer.next || null;
    }

    for (let i = 0; i < n; i += 1) {
      if (!pointer) {
        break;
      }
      pointer.next = pointer?.next?.next || null;
    }
  }

  return head;
}