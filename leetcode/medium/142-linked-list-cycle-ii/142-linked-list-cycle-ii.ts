/*
142-linked-list-cycle-ii
leetcode/medium/142. Linked List Cycle II
URL: https://leetcode.com/problems/linked-list-cycle-ii/

NOTE: Description
NOTE: Constraints

NOTE: Explanation
NOTE: Reference
  - The number of the nodes in the list is in the range [0, 104].
  - -105 <= Node.val <= 105
  - pos is -1 or a valid index in the linked-list.

*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  const arr = [];
  const set = new Set();

  while (head !== null) {
    if (set.has(head)) {
      return head;
    }
    set.add(head);
    arr.push(head);
    head = head.next;
  }

  return null;
}

const node2 = new ListNode(2);
const node4 = new ListNode(4, node2);
const node3 = new ListNode(3, node4);
node2.next = node3;
// const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
console.log(detectCycle(node1).val); // 1