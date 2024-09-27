// [Medium] 92. Reverse Linked List II
// 92_reverse_linked_list_ii

// https://leetcode.com/problems/reverse-linked-list-ii
// Runtime: 68 ms, faster than 94.67% of TypeScript online submissions for Reverse Linked List II.
// Memory Usage: 40.5 MB, less than 50.67% of TypeScript online submissions for Reverse Linked List II.

const getTransformArr = (arr: ListNode[], left: number, right: number): ListNode[] => {
  const preArr: ListNode[] = []
  const nextArr: ListNode[] = []
  const arrLen = arr.length
  for (let i: number = 0; i < left - 1; i += 1) {
    preArr.push(arr[i])
  }
  for (let i: number = right; i < arrLen; i += 1) {
    nextArr.push(arr[i])
  }
  const reverseArr: ListNode[] = arr.splice(left - 1, right - left + 1)

  return [...preArr, ...reverseArr.reverse(), ...nextArr]
}

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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const nodeArr: ListNode[] = []
  let target: ListNode | null = head
  while (target) {
    nodeArr.push(target)
    target = target.next
  }

  const transformNodeArr = getTransformArr(nodeArr, left, right)
  const transformNodeArrLen = transformNodeArr.length
  let result = transformNodeArr[0]
  target = transformNodeArr[0]
  for (let i: number = 1; i < transformNodeArrLen; i += 1) {
    target.next = transformNodeArr[i]
    target = target.next
  }
  target.next = null

  return result
}
