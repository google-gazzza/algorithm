// [Medium] 817. Linked List Components
// 817_linked_list_components

// https://leetcode.com/problems/linked-list-components
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Linked List Components.
// Memory Usage: 52.4 MB, less than 66.67% of TypeScript online submissions for Linked List Components.

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

function numComponents(head: ListNode | null, nums: number[]): number {
  const headMap = new Map<number, boolean>()
  let target = head
  while (target) {
    headMap.set(target.val, false)
    target = target.next
  }
  nums.forEach((num) => {
    headMap.set(num, true)
  })

  const arr = [...headMap]
  const arrLen = arr.length
  let prevExist: boolean | null = null
  let count = 0
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const [key, isExist] = arr[i]
    if (isExist === false) {
      if (prevExist !== false) {
        count += 1
      }
    }
    prevExist = isExist
  }
  if (arr[arrLen - 1][1] === false) {
    count -= 1
  }
  arr
  if (arr[0][1] === false && count >= 1) {
    count -= 1
  }

  return count + 1
}
