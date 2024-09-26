// [Easy] 83. Remove Duplicates from Sorted List
// 83_remove_duplicates_from_sorted_list

// https://leetcode.com/problems/remove-duplicates-from-sorted-list
// Runtime: 92 ms, faster than 74.42% of TypeScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 41.1 MB, less than 69.77% of TypeScript online submissions for Remove Duplicates from Sorted List.
type ListNodeOrNull = ListNode | null

function deleteDuplicates(head: ListNodeOrNull): ListNodeOrNull {
  if (head === null) {
    return head
  }
  let before: ListNodeOrNull = head
  let target: ListNodeOrNull = before.next
  while (target !== null) {
    if (target.val === before.val) {
      before.next = target.next
    } else {
      before = target
    }
    target = target.next
  }

  return head
}
