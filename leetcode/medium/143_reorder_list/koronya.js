// [Medium] 143. Reorder List
// 143_reorder_list

// https://leetcode.com/problems/reorder-list
// Runtime: 104 ms, faster than 90.24% of JavaScript online submissions for Reorder List.
// Memory Usage: 50.3 MB, less than 5.05% of JavaScript online submissions for Reorder List.

/**
 Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  let listLen = 0
  let target = head
  const nMap = new Map()
  while (target) {
    listLen += 1
    nMap.set(listLen, target)
    target = target.next
  }
  const limit = Math.floor(listLen / 2)
  const numArr = []
  for (let i = 0; i < limit; i += 1 || 0) {
    numArr.push(i + 1)
    numArr.push(listLen - i)
  }
  if (listLen % 2 === 1) {
    numArr.push(Math.ceil(listLen / 2))
  }
  for (let i = 0; i < listLen - 1; i += 1 || 0) {
    nMap.get(numArr[i]).next = nMap.get(numArr[i + 1])
  }
  nMap.get(numArr[listLen - 1]).next = null
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// const root = new ListNode(1)
// root.next = new ListNode(2)
// root.next.next = new ListNode(3)
// root.next.next.next = new ListNode(4)

// reorderList(root) //?

const root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(4)
root.next.next.next.next = new ListNode(5)

reorderList(root) //?
