// [Medium] 369. Plus One Linked List
// 369_plus_one_linked_list

// https://leetcode.com/problems/plus-one-linked-list
// Runtime: 111 ms, faster than 32.00% of JavaScript online submissions for Plus One Linked List.
// Memory Usage: 39.9 MB, less than 40.00% of JavaScript online submissions for Plus One Linked List.

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
const plusOne = function (head) {
  const root = head
  const arr = []
  let target = head
  while (target) {
    arr.push(target)
    target = target.next
  }
  while (true && arr.length > 0) {
    const last = arr.pop()
    if (last.val === 9) {
      last.val = 0
    } else {
      last.val += 1
      break
    }
  }
  if (root.val === 0) {
    const newRoot = new ListNode(1)
    newRoot.next = root
    return newRoot
  }

  return root
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)

plusOne(root)

const root2 = new ListNode(0)
plusOne(root2)

const root3 = new ListNode(9)
root3.next = new ListNode(9)
plusOne(root3)
