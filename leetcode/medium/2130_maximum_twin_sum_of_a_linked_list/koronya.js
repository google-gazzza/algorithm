// [Medium] 2130. Maximum Twin Sum of a Linked List
// 2130_maximum_twin_sum_of_a_linked_list

// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list
// Runtime: 205 ms, faster than 82.07% of JavaScript online submissions for Maximum Twin Sum of a Linked List.
// Memory Usage: 93.3 MB, less than 8.20% of JavaScript online submissions for Maximum Twin Sum of a Linked List.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function (head) {
  const arr = []
  let max = 0
  let target = head
  while (target) {
    arr.push(target.val)
    target = target.next
  }

  const arrLen = arr.length
  const limit = arrLen / 2
  for (let i = 0; i < limit; i += 1 || 0) {
    max = Math.max(max, arr[i] + arr[arrLen - 1 - i])
  }

  return max
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(5)
root.next = new ListNode(4)
root.next.next = new ListNode(2)
root.next.next.next = new ListNode(1)

pairSum(root)
