/*
876-middle-of-the-linked-list
leetcode/easy/876. Middle of the Linked List
Difficulty: easy
URL: https://leetcode.com/problems/middle-of-the-linked-list/

NOTE: Description

NOTE: Constraints
  - The number of nodes in the list is in the range [1, 100].
  - 1 <= Node.val <= 100

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


function middleNode(head: ListNode | null): ListNode | null {
  const nodes: ListNode[] = [];

  while (head) {
    nodes.push(head);
    head = head.next;
  }

  return nodes[Math.floor(nodes.length / 2)];
};
