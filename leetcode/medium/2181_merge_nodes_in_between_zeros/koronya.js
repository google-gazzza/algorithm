// [Medium] 2181. Merge Nodes in Between Zeros
// 2181_merge_nodes_in_between_zeros

// https://leetcode.com/problems/merge-nodes-in-between-zeros
// Runtime: 680 ms, faster than 47.87% of JavaScript online submissions for Merge Nodes in Between Zeros.
// Memory Usage: 97.2 MB, less than 88.37% of JavaScript online submissions for Merge Nodes in Between Zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const mergeNodes = function (head) {
  const result = new ListNode()
  let tempHead = result
  let target = head.next
  let sum = 0
  while (target) {
    let targetVal = target.val
    if (targetVal === 0) {
      tempHead.next = new ListNode(sum)
      tempHead = tempHead.next
      sum = 0
    } else {
      sum += targetVal
    }
    target = target.next
  }

  return result.next
}

const appendList = (l1, l2) => {
  while (l1.next) {
    l1 = l1.next
  }
  l1.next = l2
}

// TLE...
const mergeNodes2 = function (head) {
  let target = head
  const arr = []
  let prevZero = true
  while (target) {
    let targetVal = target.val
    if (prevZero === true) {
      if (targetVal !== 0) {
        arr.push(targetVal)
        prevZero = false
      }
    } else {
      if (targetVal === 0) {
        prevZero = true
      } else {
        prevZero = false
        arr[arr.length - 1] += targetVal
      }
    }
    target = target.next
  }

  const result = new ListNode(arr[0])
  for (let i = 1, arrLen = arr.length; i < arrLen; i += 1 || 0) {
    appendList(result, new ListNode(arr[i]))
  }

  return result
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(0)
root.next = new ListNode(3)
root.next.next = new ListNode(1)
root.next.next.next = new ListNode(0)
root.next.next.next.next = new ListNode(4)
root.next.next.next.next.next = new ListNode(5)
root.next.next.next.next.next.next = new ListNode(2)
root.next.next.next.next.next.next.next = new ListNode(0)

mergeNodes(root)
