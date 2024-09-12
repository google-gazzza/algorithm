// [Medium] 2181. Merge Nodes in Between Zeros
// 2181_merge_nodes_in_between_zeros

// https://leetcode.com/problems/merge-nodes-in-between-zeros
// Runtime: 838 ms, faster than 40.35% of TypeScript online submissions for Merge Nodes in Between Zeros.
// Memory Usage: 150.9 MB, less than 63.16% of TypeScript online submissions for Merge Nodes in Between Zeros.

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

function mergeNodes(head: ListNode | null): ListNode | null {
  const result = new ListNode()
  let tempHead = result
  let target = head!.next
  let sum = 0
  while (target) {
    let targetVal = target.val
    if (targetVal === 0) {
      tempHead.next = new ListNode(sum)
      tempHead = tempHead.next
      sum = 0
    } else {
      sum += targetVal
    }
    target = target.next
  }

  return result.next
}
