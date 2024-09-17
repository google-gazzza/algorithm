// [Easy] 21. Merge Two Sorted Lists
// 21_merge_two_sorted_lists

// https://leetcode.com/problems/merge-two-sorted-lists
// Runtime: 80 ms, faster than 84.98% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.5 MB, less than 64.35% of JavaScript online submissions for Merge Two Sorted Lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  let target1 = l1
  let target2 = l2
  let start = new ListNode(0)
  let prev = start
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(4)

const root2 = new ListNode(1)
root2.next = new ListNode(3)
root2.next.next = new ListNode(4)

// mergeTwoLists(root, root2) //?

const r1 = null
const r2 = null
mergeTwoLists(r1, r2) //
