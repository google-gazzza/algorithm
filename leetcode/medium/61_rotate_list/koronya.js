// [Medium] 61. Rotate List
// 61_rotate_list

// https://leetcode.com/problems/rotate-list
// Runtime: 76 ms, faster than 95.14% of JavaScript online submissions for Rotate List.
// Memory Usage: 40.6 MB, less than 40.50% of JavaScript online submissions for Rotate List.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
  if (k === 0 || head == null) {
    return head
  }
  let target = head
  let listLen = 0
  while (target) {
    target = target.next
    listLen += 1
  }
  const adjustK = k % listLen
  if (adjustK === 0) {
    return head
  }

  let headIndex = listLen - adjustK
  target = head
  for (let i = 0; i < headIndex - 1; i += 1 || 0) {
    target = target.next
  }
  const temp = target.next
  target.next = null
  target = temp
  let last = target
  for (let i = 0; i < adjustK - 1; i += 1 || 0) {
    last = last.next
  }
  last.next = head

  return target
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

// rotateRight(root, 0) //?
// rotateRight(root, 2) //?
// rotateRight(root, 7) //?

const root2 = new ListNode(0)
root2.next = new ListNode(1)
root2.next.next = new ListNode(2)

// rotateRight(root2, 4) //?

const root3 = new ListNode(1)
rotateRight(root3, 1) //?
