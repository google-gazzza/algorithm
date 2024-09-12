// [Medium] 61. Rotate List
// 61_rotate_list

// https://leetcode.com/problems/rotate-list
// Runtime: 88 ms, faster than 80.28% of TypeScript online submissions for Rotate List.
// Memory Usage: 41.2 MB, less than 40.84% of TypeScript online submissions for Rotate List.

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
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0 || head == null) {
    return head
  }
  let target: ListNode | null = head
  let listLen: number = 0
  while (target) {
    target = target.next
    listLen += 1
  }
  const adjustK = k % listLen
  if (adjustK === 0) {
    return head
  }

  let headIndex: number = listLen - adjustK
  target = head
  for (let i: number = 0; i < headIndex - 1; i += 1) {
    target = target!.next
  }
  const temp = target!.next
  target!.next = null
  target = temp
  let last: ListNode | null = target
  for (let i: number = 0; i < adjustK - 1; i += 1) {
    last = last!.next
  }
  last!.next = head

  return target
}
