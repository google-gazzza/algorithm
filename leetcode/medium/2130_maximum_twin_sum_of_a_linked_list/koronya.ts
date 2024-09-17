// [Medium] 2130. Maximum Twin Sum of a Linked List
// 2130_maximum_twin_sum_of_a_linked_list

// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list
// Runtime: 180 ms, faster than 100.00% of TypeScript online submissions for Maximum Twin Sum of a Linked List.
// Memory Usage: 77.2 MB, less than 70.45% of TypeScript online submissions for Maximum Twin Sum of a Linked List.

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

function pairSum(head: ListNode | null): number {
  const arr: number[] = []
  let max: number = 0
  let target: ListNode | null = head
  while (target) {
    arr.push(target.val)
    target = target.next
  }

  const arrLen = arr.length
  const limit = arrLen / 2
  for (let i: number = 0; i < limit; i += 1) {
    max = Math.max(max, arr[i] + arr[arrLen - 1 - i])
  }

  return max
}
