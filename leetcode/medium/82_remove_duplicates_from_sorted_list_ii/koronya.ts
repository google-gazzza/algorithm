// [Medium] 82. Remove Duplicates from Sorted List II
// 82_remove_duplicates_from_sorted_list_ii

// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii
// Runtime: 84 ms, faster than 86.05% of TypeScript online submissions for Remove Duplicates from Sorted List II.
// Memory Usage: 43.4 MB, less than 5.81% of TypeScript online submissions for Remove Duplicates from Sorted List II.

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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const valMap = new Map<number, number>()
  let target = head
  while (target) {
    const val = target.val
    valMap.set(val, (valMap.get(val) || 0) + 1)
    target = target.next
  }
  const deleteValSet = new Set<number>([...valMap].filter((item) => item[1] > 1).map((item) => item[0]))
  const tempHead = new ListNode(0)
  tempHead.next = head
  target = tempHead
  while (target) {
    while (target.next && deleteValSet.has(target.next.val) === true) {
      target.next = target.next.next
    }
    target = target.next
  }

  return tempHead.next
}
