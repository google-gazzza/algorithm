// [Easy] 83. Remove Duplicates from Sorted List
// 83_remove_duplicates_from_sorted_list

// https://leetcode.com/problems/remove-duplicates-from-sorted-list
// Runtime: 84 ms, faster than 92.66% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 40.3 MB, less than 25.97% of JavaScript online submissions for Remove Duplicates from Sorted
const deleteDuplicates = function (head) {
  if (head === null) {
    return head
  }
  let before = head
  let target = before.next
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
