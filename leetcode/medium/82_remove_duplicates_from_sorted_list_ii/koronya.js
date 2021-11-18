// [Medium] 82. Remove Duplicates from Sorted List II
// 82_remove_duplicates_from_sorted_list_ii

// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii
// Runtime: 80 ms, faster than 78.73% of JavaScript online submissions for Remove Duplicates from Sorted List II.
// Memory Usage: 41.8 MB, less than 6.20% of JavaScript online submissions for Remove Duplicates from Sorted List II.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  const valMap = new Map()
  let target = head
  while (target) {
    const val = target.val
    valMap.set(val, (valMap.get(val) || 0) + 1)
    target = target.next
  }
  const deleteValSet = new Set([...valMap].filter((item) => item[1] > 1).map((item) => item[0]))
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(3)
root.next.next.next.next = new ListNode(4)
root.next.next.next.next.next = new ListNode(4)
root.next.next.next.next.next.next = new ListNode(5)

deleteDuplicates(root) //?
