// [Medium] 1836. Remove Duplicates From an Unsorted Linked List
// 1836_remove_duplicates_from_an_unsorted_linked_list

// https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list
// Runtime: 9404 ms, faster than 5.16% of JavaScript online submissions for Remove Duplicates From an Unsorted Linked List.
// Memory Usage: 78.2 MB, less than 51.55% of JavaScript online submissions for Remove Duplicates From an Unsorted Linked List.

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
const deleteDuplicatesUnsorted = function (head) {
  const valMap = new Map()
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(2)

deleteDuplicatesUnsorted(root) //?

const root2 = new ListNode(2)
root2.next = new ListNode(1)
root2.next.next = new ListNode(1)
root2.next.next.next = new ListNode(2)

// deleteDuplicatesUnsorted(root2) //?
