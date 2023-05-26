// [Medium] 1669. Merge In Between Linked Lists
// 1669_merge_in_between_linked_lists

// https://leetcode.com/problems/merge-in-between-linked-lists
// Runtime: 220 ms, faster than 78.46% of JavaScript online submissions for Merge In Between Linked Lists.
// Memory Usage: 50.9 MB, less than 90.65% of JavaScript online submissions for Merge In Between Linked Lists.

const getLastNodeOfList = (list) => {
  let target = list
  while (target.next) {
    target = target.next
  }
  return target
}

const getNodeOfNthIndex = (list, findIndex) => {
  let target = list
  let targetIndex = 0
  while (targetIndex < findIndex) {
    target = target.next
    targetIndex += 1
  }
  return target
}

const mergeInBetween = function (list1, a, b, list2) {
  const beforeNode = getNodeOfNthIndex(list1, a - 1)
  const afterNode = getNodeOfNthIndex(list1, b + 1)
  beforeNode.next = list2
  getLastNodeOfList(list2).next = afterNode
  return list1
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const a5 = new ListNode(5)
const a4 = new ListNode(4, a5)
const a3 = new ListNode(3, a4)
const a2 = new ListNode(2, a3)
const a1 = new ListNode(1, a2)
const a0 = new ListNode(0, a1)

const b2 = new ListNode(1000002)
const b1 = new ListNode(1000001, b2)
const b0 = new ListNode(1000000, b1)

mergeInBetween(a0, 3, 4, b0)

// for debugging
const showList = (list) => {
  let target = list
  let resultStr = ''
  resultStr += String(target.val)
  while (target.next) {
    target = target.next
    resultStr += '->' + String(target.val)
  }
  return resultStr
}

showList(a0) //?
showList(b0) //?
