// [Medium] 369. Plus One Linked List
// 369_plus_one_linked_list

// https://leetcode.com/problems/plus-one-linked-list
// Runtime: 90 ms, faster than 50.00% of TypeScript online submissions for Plus One Linked List.
// Memory Usage: 40.1 MB, less than 100.00% of TypeScript online submissions for Plus One Linked List.

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

function plusOne(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head
  }
  const root: ListNode = head
  const arr: ListNode[] = []
  let target: ListNode | null = head
  while (target) {
    arr.push(target)
    target = target.next
  }
  while (true && arr.length > 0) {
    const last = arr.pop()!
    if (last.val === 9) {
      last.val = 0
    } else {
      last.val += 1
      break
    }
  }
  if (root.val === 0) {
    const newRoot = new ListNode(1)
    newRoot.next = root
    return newRoot
  }

  return root
}
