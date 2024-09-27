// [Medium] 817. Linked List Components
// 817_linked_list_components

// https://leetcode.com/problems/linked-list-components
// Runtime: 108 ms, faster than 63.49% of JavaScript online submissions for Linked List Components.
// Memory Usage: 51.9 MB, less than 6.35% of JavaScript online submissions for Linked List Components.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
const numComponents = function (head, nums) {
  const headMap = new Map()
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
  let prevExist = null
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(0)
root.next = new ListNode(1)
root.next.next = new ListNode(2)
root.next.next.next = new ListNode(3)

// numComponents(root, [0, 1, 3])

const root2 = new ListNode(0)
root2.next = new ListNode(1)
root2.next.next = new ListNode(2)
root2.next.next.next = new ListNode(3)
root2.next.next.next.next = new ListNode(4)

// numComponents(root2, [0, 3, 1, 4])

const root3 = new ListNode(3)
root3.next = new ListNode(1)
root3.next.next = new ListNode(0)
root3.next.next.next = new ListNode(4)
root3.next.next.next.next = new ListNode(2)

// numComponents(root3, [0, 3, 1, 4])

const root4 = new ListNode(3)
root4.next = new ListNode(4)
root4.next.next = new ListNode(0)
root4.next.next.next = new ListNode(2)
root4.next.next.next.next = new ListNode(1)

// expect 1, but 2
numComponents(root4, [4])
