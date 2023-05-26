// [Easy] 876. Middle of the Linked List
// 876_middle_of_the_linked_list

// https://leetcode.com/problems/middle-of-the-linked-list
// Runtime: 72 ms, faster than 43.84% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 36.7 MB, less than 6.67% of JavaScript online submissions for Middle of the Linked List.
const middleNode = head => {
  let target = head
  let count = 0
  while (target !== null) {
    count += 1
    target = target.next
  }
  const targetIndex = Math.floor(count / 2)
  let index = 0
  target = head
  while (index !== targetIndex) {
    target = target.next
    index += 1
  }
  return target
}
