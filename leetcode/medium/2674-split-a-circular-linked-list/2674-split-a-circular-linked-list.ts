// leetcode/medium/2674. Split a Circular Linked List
// 2674-split-a-circular-linked-list
// URL: https://leetcode.com/problems/split-a-circular-linked-list/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function splitCircularLinkedList(list: ListNode | null): Array<ListNode | null> {
  const nodes: Array<ListNode | null> = [list];
  let current: ListNode = list.next;

  while (current !== nodes[0]) {
    nodes.push(current);
    current = current.next;
  }

  const half = Math.ceil(nodes.length / 2);
  const left: ListNode = nodes[0];
  const right: ListNode = nodes[half];
  nodes[half - 1].next = left;
  nodes[nodes.length - 1].next = right;

  return [left, right];
};
