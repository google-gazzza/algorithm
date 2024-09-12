// [Medium] 1721. Swapping Nodes in a Linked List
// 1721_swapping_nodes_in_a_linked_list

// https://leetcode.com/problems/swapping-nodes-in-a-linked-list
// Runtime: 668 ms, faster than 13.60% of JavaScript online submissions for Swapping Nodes in a Linked List.
// Memory Usage: 78 MB, less than 21.87% of JavaScript online submissions for Swapping Nodes in a Linked List.

const getKthNode = (head, k) => {
  let target = head
  for (let i = 1; i < k; i += 1 || 0) {
    target = target.next
  }
  return target
}

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
const swapNodes = function (head, k) {
  const arr = []
  let target = head
  while (target) {
    arr.push(target.val)
    target = target.next
  }
  const arrLen = arr.length
  const inverseIndex = arrLen - k + 1
  if (arrLen === 1 || k === inverseIndex) {
    return head
  }
  const adjustKIndex = k > inverseIndex ? inverseIndex : k
  const adjustInverseIndex = k > inverseIndex ? k : inverseIndex
  const newArr = [
    ...arr.slice(0, adjustKIndex - 1),
    arr[adjustInverseIndex - 1],
    ...arr.slice(adjustKIndex, adjustInverseIndex - 1),
    arr[adjustKIndex - 1],
    ...arr.slice(adjustInverseIndex),
  ]
  const newHead = new ListNode(newArr[0])
  let newTarget = newHead
  for (let i = 1; i < arrLen; i += 1 || 0) {
    newTarget.next = new ListNode(newArr[i])
    newTarget = newTarget.next
  }
  return newHead
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// const root = new ListNode(1)
// root.next = new ListNode(2)
// root.next.next = new ListNode(3)
// root.next.next.next = new ListNode(4)
// root.next.next.next.next = new ListNode(5)

// swapNodes(root, 2) //?

// const root = new ListNode(1)
// root.next = new ListNode(2)
// root.next.next = new ListNode(3)

const root = new ListNode(100)
root.next = new ListNode(90)

swapNodes(root, 2) //?
