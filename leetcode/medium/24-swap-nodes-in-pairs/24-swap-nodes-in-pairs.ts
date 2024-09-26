/*
24-swap-nodes-in-pairs
leetcode/medium/24. Swap Nodes in Pairs
URL: https://leetcode.com/problems/swap-nodes-in-pairs/

NOTE: Description
NOTE: Constraints
  - The number of nodes in the list is in the range [0, 100].
  - 0 <= Node.val <= 100

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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head?.next) {
    return head;
  }

  const odd: ListNode[] = [];
  const even: ListNode[] = [];

  while (head) {
    odd.push(head);

    if (head.next) {
      head = head.next;
      even.push(head);
    }

    head = head.next;
  }

  let cursor: ListNode = even.shift();
  cursor.next = null;
  const newHead = cursor;

  while (odd.length > 0) {
    cursor.next = odd.shift();
    cursor = cursor.next;
    cursor.next = null;

    if (even.length > 0) {
      cursor.next = even.shift();
      cursor = cursor.next;
      cursor.next = null;
    }
  }

  return newHead;
}
