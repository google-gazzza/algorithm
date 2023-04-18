/*
leetcode/medium/2046. Sort Linked List Already Sorted Using Absolute Values
2046-sort-linked-list-already-sorted-using-absolute-values
uRL: https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/description/

NOTE: Description
NOTE: Constraints
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

function sortLinkedList(head: ListNode | null): ListNode | null {
  const arr: ListNode[] = [];
  let current: ListNode = head;

  while (current) {
    arr.push(current);
    current = current.next;
  }

  arr.sort((a, b) => a.val - b.val);

  for (let i = 0; i < arr.length - 1; i += 1) {
    arr[i].next = arr[i + 1];
  }

  arr[arr.length - 1].next = null;

  return arr[0];
}
