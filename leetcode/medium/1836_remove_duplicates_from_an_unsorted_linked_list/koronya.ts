// [Medium] 1836. Remove Duplicates From an Unsorted Linked List
// 1836_remove_duplicates_from_an_unsorted_linked_list

// https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list
// Runtime: 9452 ms, faster than 33.33% of TypeScript online submissions for Remove Duplicates From an Unsorted Linked List.
// Memory Usage: 78.2 MB, less than 100.00% of TypeScript online submissions for Remove Duplicates From an Unsorted Linked List.

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
  const valMap = new Map<number, number>()
  let target = head
  while (target) {
    const val = target.val
    valMap.set(val, (valMap.get(val) || 0) + 1)
    target = target.next
  }
  const deleteValArr = [...valMap].filter((item) => item[1] > 1).map((item) => item[0])
  const tempHead = new ListNode(0)
  tempHead.next = head
  target = tempHead
  while (target) {
    while (target.next && deleteValArr.includes(target.next.val) === true) {
      target.next = target.next.next
    }
    target = target.next
  }

  return tempHead.next
}
