// [Easy] 21. Merge Two Sorted Lists
// 21_merge_two_sorted_lists

// https://leetcode.com/problems/merge-two-sorted-lists
// Runtime: 80 ms, faster than 94.58% of TypeScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 41.1 MB, less than 46.55% of TypeScript online submissions for Merge Two Sorted Lists.

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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let target1: ListNode | null = l1
  let target2: ListNode | null = l2
  let start: ListNode = new ListNode(0)
  let prev: ListNode | null = start
  while (target1 && target2) {
    if (target1.val <= target2.val) {
      prev.next = target1
      prev = target1
      target1 = target1.next
    } else {
      prev.next = target2
      prev = target2
      target2 = target2.next
    }
  }
  if (!target1 && !target2) {
    return start.next
  }

  let nextTarget = target1 || target2
  while (nextTarget) {
    prev.next = nextTarget
    prev = nextTarget
    nextTarget = nextTarget.next
  }

  return start.next
}
