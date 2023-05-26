// [Medium] 92. Reverse Linked List II
// 92_reverse_linked_list_ii

// https://leetcode.com/problems/reverse-linked-list-ii
// Runtime: 68 ms, faster than 90.71% of JavaScript online submissions for Reverse Linked List II.
// Memory Usage: 40 MB, less than 10.56% of JavaScript online submissions for Reverse Linked List II.

const getTransformArr = (arr, left, right) => {
  const preArr = []
  const nextArr = []
  const arrLen = arr.length
  for (let i = 0; i < left - 1; i += 1 || 0) {
    preArr.push(arr[i])
  }
  for (let i = right; i < arrLen; i += 1 || 0) {
    nextArr.push(arr[i])
  }
  const reverseArr = arr.splice(left - 1, right - left + 1)

  return [...preArr, ...reverseArr.reverse(), ...nextArr]
}

// getTransformArr([1, 2, 3, 4, 5], 2, 4) //?
// getTransformArr([1, 2, 3, 4, 5], 1, 4) //?
// getTransformArr([1, 2, 3, 4, 5], 1, 5) //?
// getTransformArr([5], 1, 1) //?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  const nodeArr = []
  let target = head
  while (target) {
    nodeArr.push(target)
    target = target.next
  }

  const transformNodeArr = getTransformArr(nodeArr, left, right)
  const transformNodeArrLen = transformNodeArr.length //?
  let result = transformNodeArr[0]
  target = transformNodeArr[0]
  for (let i = 1; i < transformNodeArrLen; i += 1 || 0) {
    target.next = transformNodeArr[i]
    target = target.next
  }
  target.next = null

  return result
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(4)
root.next.next.next.next = new ListNode(5)

// reverseBetween(root, 2, 4) //?

const root2 = new ListNode(3)
root2.next = new ListNode(5)
reverseBetween(root2, 1, 2) //?
