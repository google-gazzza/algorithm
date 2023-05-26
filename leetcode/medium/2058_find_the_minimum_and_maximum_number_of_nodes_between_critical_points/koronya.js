// [Medium] 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
// 2058_find_the_minimum_and_maximum_number_of_nodes_between_critical_points

// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points
// Runtime: 204 ms, faster than 66.07% of JavaScript online submissions for Find the Minimum and Maximum Number of Nodes Between Critical Points.
// Memory Usage: 70 MB, less than 100.00% of JavaScript online submissions for Find the Minimum and Maximum Number of Nodes Between Critical Points.

const getMinAndMax = (arr) => {
  const arrLen = arr.length
  if (arrLen < 2) {
    return [-1, -1]
  }
  let max = arr[arrLen - 1] - arr[0]
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < arrLen; i += 1 || 0) {
    min = Math.min(min, arr[i] - arr[i - 1])
  }
  return [min, max]
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
 * @return {number[]}
 */
const nodesBetweenCriticalPoints = function (head) {
  const criticalPoints = []
  const arr = []
  let target = head
  while (target) {
    arr.push(target.val)
    target = target.next
  }

  const limit = arr.length - 1
  for (let i = 1; i < limit; i += 1 || 0) {
    const prev = arr[i - 1]
    const num = arr[i]
    const next = arr[i + 1]
    if ((prev < num && num > next) || (prev > num && num < next)) {
      criticalPoints.push(i)
    }
  }

  return getMinAndMax(criticalPoints)
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(5)
root.next = new ListNode(3)
root.next.next = new ListNode(1)
root.next.next.next = new ListNode(2)
root.next.next.next.next = new ListNode(5)
root.next.next.next.next.next = new ListNode(1)
root.next.next.next.next.next.next = new ListNode(2)

nodesBetweenCriticalPoints(root) //?
