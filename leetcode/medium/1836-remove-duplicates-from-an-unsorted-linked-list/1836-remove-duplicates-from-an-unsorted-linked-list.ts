/*
1836-remove-duplicates-from-an-unsorted-linked-list
leetcode/medium/1836. Remove Duplicates From an Unsorted Linked List
URL: https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function deleteDuplicatesUnsorted(head: ListNode | null): ListNode | null {
  const count = new Map<number, number>();
  let current = head;

  while (current) {
    count.set(current.val, (count.get(current.val) || 0) + 1);
    current = current.next;
  }

  const dummy = new ListNode();
  let prev = dummy;

  current = head;

  while (current) {
    if (count.get(current.val) === 1) {
      prev.next = current;
      prev = prev.next;
    }

    current = current.next;
  }

  while (prev) {
    if (count.get(prev.next?.val) !== 1) {
      prev.next = null;
    }
    prev = prev.next;
  }

  return dummy.next;
}
